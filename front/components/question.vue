<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
// --- Props ---
const props = defineProps<{
  question: Object;
}>()
const question = shallowRef(props.question)

// 選択肢読み込み
const { choices } = reactive(useChoices())

// ステップ1~3の区切りとなる設問ID
// TODO: steps.tsがせっかくあるのでそちらに移した方が管理しやすい。いつか移す
enum DELIMITER {
  FIRST = 10,
  SECOND = 20,
  FINAL = 28,
}

// 各ステップの最終設問の下線は非表示
const isDelimiter = computed(() => {
  // ENUM型の中に指定の文字が含まれているか
  return (Object.values(DELIMITER) as string[]).includes(question.value.id)
})

// クリックされた設問に移動
function moveSelectQuestion (event, id, value): void {
  let nextTarget
  // 各ステップの最後の設問をクリックした場合は「次へ」または「診断結果へ」の位置を取得
  if ((Object.values(DELIMITER) as string[]).includes(question.value.id)) {
    let targetLabel
    switch (id) {
      case DELIMITER.FIRST:
        targetLabel = 'first-delimiter'
        break
      case DELIMITER.SECOND:
        targetLabel = 'second-delimiter'
        break
      case DELIMITER.FINAL:
        targetLabel = 'final-delimiter'
        break
    }
    nextTarget = document.getElementById(targetLabel)
  } else {
    nextTarget = document.getElementById('scroll-' + (id + 1) + '-' + value)
  }
  const nextQuestionY = nextTarget.getBoundingClientRect().top + window.scrollY + 20 // 20pxは調整値
  const pointerY = window.scrollY + event.clientY // viewport外を含めて最上部から現在のポインターの距離
  const offset = nextQuestionY - pointerY // 次設問との距離
  window.scrollBy({ top: offset, behavior: 'smooth' })
}
</script>

<template>
  <div class="question-container d-flex align-center flex-column">
    <div class="d-flex justify-space-around">
      <p :id="'question-id-' + question.id" class="question-number">
        Q{{ question.id }}
      </p>
      <p class="question-text">
        {{ question.question_contents }}
      </p>
    </div>
    <div class="choices-container d-flex justify-space-around mb-5">
      <div v-for="choice in choices" :key="choice.value" class="">
        <div class="input-container d-flex flex-column justify-space-between">
          <input
            :id="question.id + '-' + choice.value"
            v-model="question.answer"
            type="radio"
            :value="choice.value"
            @click="moveSelectQuestion($event, question.id, choice.value)"
          >
          <div class="chack-mark">
            <span />
          </div>
          <label
            :id="'scroll-' + question.id + '-' + choice.value"
            :for="question.id + '-' + choice.value"
          >
            {{ choice.text }}
          </label>
        </div>
      </div>
    </div>
    <v-divider v-if="!isDelimiter" :thickness="1" color="black" />
  </div>
</template>

<style lang="scss" scoped>
.question-container {
  margin: 15px 20px 5px;
  .question-number {
    color: #ead3f0;
    font-weight: 700;
    font-size: 16px;
    margin-right: 1em; // 1文字分余白
  }
  .question-text {
    color: #333;
    font-weight: 700;
    font-size: 16px;
  }
  .choices-container {
    width: 500px;
    .input-container {
      font-size: 10px;
      height: 100px;
      margin: 20px 20px 0;
      label {
        width: 70px;
        position: relative;
        padding-top: 60px;
        text-align: center;
        white-space: pre-line; // TODO  SP画面での折り返し制御ができていない「全くあてはまらない」の選択肢
        cursor: pointer; // TODO クリックできる範囲を広げたい
        user-select: none;
        &::before {
          position: absolute;
          content: "";
          display: block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #d9d9d9;
          border: 1px solid #ddd;
          left: 10px;
          top: 0;
        }
        &::after {
          position: absolute;
          content: "";
          display: block;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #fff;
          left: 20px;
          top: 10px;
          transition: 0.3s;
        }
      }
      input[type="radio"] {
        display: none;
        // radioをチェックした時のstyle
        &:checked ~ label::after {
          opacity: 0;
        }
        &:checked ~ label::before {
          opacity: 1;
          background: #7e5da4;
        }
        &:hover ~ label::after {
          opacity: 0;
        }
        &:hover ~ label::before {
          opacity: 1;
          background: #7e5da4;
        }
      }
    }
  }
  hr {
    width: 600px;
    opacity: 0.5 !important; // vuetifyのv-dividerのデフォルト値上書き
  }
}
@media screen and (width <= 700px) {
  .question-container {
    margin: 30px 20px 5px;
    .question-number {
      font-weight: 700;
      font-size: 16px;
      margin-right: 1em; // 1文字分余白
    }
    .question-text {
      font-size: 16px;
    }
    .choices-container {
      width: 85vw;
      .input-container {
        font-size: 10px;
        height: 100px;
        margin: 10px 0px;
        label {
          &::before {
            width: 50px;
            height: 50px;
            left: 25;
          }
          &::after {
            width: 30px;
            height: 30px;
            left: 20px;
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
    &::before {
      content: "";
      width: 0;
      height: 2px;
      position: absolute;
      transform: rotate(40deg);
      top: 33px; // 場所移動
      left: 24px; // 場所移動
      transition: width 50ms ease 50ms;
      transform-origin: 0% 0%;
      z-index: 10;
    }
    &::after {
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
      z-index: 10;
    }
  }
}
input[type="radio"] {
  &:checked {
    + .chack-mark {
      span {
        background-color: #fff;
        &::after {
          width: 20px; // チェックマークの長さ 右
          background: #fff;
          transition: width 200ms ease 100ms;
        }
        &::before {
          width: 15px; // チェックマークの長さ 左
          background: #fff;
          transition: width 50ms ease 100ms;
        }
      }
    }
  }
}
</style>
