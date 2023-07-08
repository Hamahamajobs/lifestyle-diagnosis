<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// --- Props ---
const props = defineProps < {
    question: Object
} >()
const question = ref(props.question)

// 選択肢読み込み
const { choices } = reactive(useChoices())

// 最終設問の下線は非表示
const isHideDivider = computed(() => {
  // 10: step1の最終設問, 20: step2の最終設問
  const hideDividerIds: number[] = [10, 20]
  return hideDividerIds.includes(question.value.id)
})

// クリックされた設問に移動
function moveSelectQuestion(id):void {
  const element = document.getElementById('question-id-'+id);
  const rect = element.getBoundingClientRect();
  const elementTop = rect.top + window.pageYOffset;
  // document.documentElement.scrollTop = elementTop;
  scrollTo(0, elementTop);
}

console.log('hogehoge')

</script>

<template>
  <div class="question-container d-flex align-center flex-column ">
    <div class="d-flex justify-space-around">
      <p :id="'question-id-'+question.id" class="question-number">
        Q{{ question.id }}
      </p>
      <p class="question-text">
        {{ question.question_contents }}
      </p>
    </div>
    <div class="choices-container d-flex justify-space-around mb-5">
      <template v-for="choice in choices" :key="choice.value" class="">
        <div class="d-flex flex-column justify-space-between input-container">
          <input
            :id="question.id + '-' + choice.value"
            v-model="question.answer"
            type="radio"
            :value="choice.value"
            @click="moveSelectQuestion(question.id)"
          >
          <label :for="question.id + '-' + choice.value">
            {{ choice.text }}
          </label>
        </div>
      </template>
    </div>
    <v-divider v-if="!isHideDivider" :thickness="1" color="black" />
  </div>
</template>

<style lang="scss" scoped>
.question-container{
  margin: 30px 20px 5px 20px;
  .question-number{
    color: #EC8814;
    font-weight: 700;
    font-size: 16px;
    margin-right: 1em; // 1文字分余白
  }
  .question-text{
    color: #333333;
    font-weight: 700;
    font-size: 16px;
  }
  .choices-container {
    width: 500px;
    .input-container {
      font-size: 10px;
      height: 100px;
      margin: 10px 20px;
      label{
        width:70px;
        position: relative;
        padding-top: 60px;
        text-align:center;
        white-space: pre-line;
        cursor: pointer; // TODO クリックできる範囲を広げたい ぴつこに相談
        &::before{
          position: absolute;
          content: '';
          display: block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #D9D9D9;
          border: 1px solid #ddd;
          left: 10px;
          top: 0px;
        }
        &::after{
          position: absolute;
          content: '';
          display: block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #FFFFFF;
          left: 20px;
          top: 10px;
          transition: .3s;
        }
      }
      input[type=radio]{
        display:none;
        // radioをチェックした時のstyle
        &:checked + label::after {
          opacity: 0;
        }
        &:checked + label::before {
          opacity: 1;
          background: #FF9417;
        }
        &:hover + label::after {
          opacity: 0;
        }
        &:hover + label::before {
          opacity: 1;
          background: #FF9417;
        }
      }
    }
  }
  hr {
    width: 600px;
    opacity: 0.5 !important; // vuetifyのv-dividerのデフォルト値上書き
  }
}
@media screen and (max-width: 700px) {
.question-container{
  margin: 30px 20px 5px 20px;
  // background:red;
  .question-number{
    color: #EC8814;
    font-weight: 700;
    font-size: 16px;
    margin-right: 1em; // 1文字分余白
  }
  .question-text{
    font-size: 16px;
  }
  .choices-container {
    width: 80vw;
    .input-container {
      font-size: 10px;
      height: 100px;
      margin: 10px 13px;
      label{
        width:45px;
        &::before{
          width: 50px;
          height: 50px;
          left: 0px;
        }
        &::after{
          width: 30px;
          height: 30px;
          left: 10px;
          top: 10px;
        }
      }
    }
  }
  hr {
    width: 80%;
  }
}
}
</style>
