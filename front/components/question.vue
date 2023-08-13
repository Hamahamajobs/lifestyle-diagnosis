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
function moveSelectQuestion (id):void {
  const element = document.getElementById('question-id-' + id)
  const rect = element.getBoundingClientRect()
  // TODO: もっとも上の要素をクリックしたときにずれる可能性がある
  const elementTop = rect.top + window.pageYOffset
  // TODO: 画面上部や画面下部だとスクロール先がずれるので修正する
  window.scrollTo({
    top: elementTop,
    behavior: 'smooth'
  })
}
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
      <div v-for="choice in choices" :key="choice.value" class="">
        <div class="d-flex flex-column justify-space-between input-container">
          <input
            :id="question.id + '-' + choice.value"
            v-model="question.answer"
            type="radio"
            :value="choice.value"
            @click="moveSelectQuestion(question.id)"
          >
          <div class="chack-mark">
            <span />
          </div>
          <label :for="question.id + '-' + choice.value">
            {{ choice.text }}
          </label>
        </div>
      </div>
    </div>
    <v-divider v-if="!isHideDivider" :thickness="1" color="black" />
  </div>
</template>

<style lang="scss" scoped>
.question-container{
  margin: 15px 20px 5px 20px;
  // background:red;
  .question-number{
    color: #EAD3F0;
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
    // background:blue;
    .input-container {
      font-size: 10px;
      height: 100px;
      margin: 20px 20px 0px 20px;
      // background:red;
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
        &:checked ~ label::after {
          opacity: 0;
        }
        &:checked ~ label::before {
          opacity: 1;
          background: #7E5DA4;
        }
        &:hover ~ label::after {
          opacity: 0;
        }
        &:hover ~ label::before {
          opacity: 1;
          background: #7E5DA4;
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
    color: #B0A997;
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

<style lang="scss" scoped>
/*
 * 回答のチェックマーク用CSS
 */
.chack-mark {
    position: relative; // チェックマークの基準になる
    span {
    &:before {
      content: "";
      width: 0px;
      height: 2px;
      position: absolute;
      transform: rotate(40deg);
      top: 33px; // 場所移動
      left: 24px; // 場所移動
      transition: width 50ms ease 50ms;
      transform-origin: 0% 0%;
      z-index:10;
    }

    &:after {
      content: "";
      width: 0;
      height: 2px;
      border-radius: 2px;
      background: #fff;
      position: absolute;
      transform: rotate(310deg);
      top: 43px; // 場所移動
      left: 33px; // 場所移動
      transition: width 50ms ease;
      transform-origin: 0% 0%;
      z-index:10;
    }
  }
}

input[type="radio"] {
  &:checked {
    + .chack-mark{
      span {
        background-color: #fff;

        &:after {
          width: 20px; // チェックマークの長さ 右
          background: #FFFFFF;
          transition: width 200ms ease 100ms;
        }

        &:before {
          width: 15px; // チェックマークの長さ 左
          background: #FFFFFF;
          transition: width 50ms ease 100ms;
        }
    }
    }
  }
}
</style>
