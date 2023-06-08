
<template>
  <div>
    <v-container fluid class="d-flex align-center flex-column mb-3 diagnosis-main-container">
      <div class="mb-10">
        <v-btn
          class="text-center ml-3"
          prepend-icon="mdi-google-circles-extended"
          variant="outlined"
          color="error"
          @click="random"
        >
          ランダム入力
        </v-btn>
        <v-btn
          class="text-center ml-3"
          prepend-icon="mdi-account-arrow-left"
          variant="outlined"
          color="blue"
          @click="randomToResult"
        >
          ランダム入力して結果へ
        </v-btn>
      </div>
      <!-- 診断step1 設問No1~No10 -->
      <template v-if="currentStep === 1">
        <div class="message-container d-flex flex-column align-center">
          <p class="message">
            <span>あ</span>まり考えずに、迷ったら直感で答えましょう！
          </p>
          <hr class="message-footer-line">
        </div>
        <question
          v-for="index in 10"
          :key="index"
          :question="questions[index-1]"
        />
        <div class="d-flex justify-center mb-5">
          <button
            class="next-button"
            :class="{'filled-next-button': isCompleted(step1.start, step1.end)}"
            :disabled="!isCompleted(step1.start, step1.end)"
            type="button"
            @click="goNextStep"
          >
            <span>次へ</span>
          </button>
        </div>
      </template>

      <!-- 診断step2 設問No11~No20 -->
      <template v-if="currentStep === 2">
        <div class="message-container d-flex flex-column align-center">
          <p class="message">
            <span>い</span>いペースです！このまま直感的に回答していきましょう。
          </p>
          <hr class="message-footer-line">
        </div>
        <question
          v-for="index in 10"
          :key="index"
          :question="questions[step1.end+index]"
        />
        <div class="d-flex justify-center mb-5">
          <button
            class="next-button"
            :class="{'filled-next-button': isCompleted(step2.start, step2.end)}"
            :disabled="!isCompleted(step2.start, step2.end)"
            type="button"
            @click="goNextStep"
          >
            <span>次へ</span>
          </button>
        </div>
      </template>

      <!-- 診断step3 設問No21~No28 -->
      <template v-if="currentStep === 3">
        <div class="message-container d-flex flex-column align-center">
          <p class="message">
            <span>こ</span>のページが最後です！残り8問で診断結果が出ます。
          </p>
          <hr class="message-footer-line">
        </div>
        <question
          v-for="index in 8"
          :key="index"
          :question="questions[step2.end+index]"
        />
        <div class="d-flex justify-center mb-5">
          <button
            class="next-button"
            :class="{'filled-next-button': isCompleted(step3.start, step3.end)}"
            :disabled="!isCompleted(step3.start, step3.end)"
            type="button"
            @click="clicksend"
          >
            <span>診断結果へ</span>
          </button>
        </div>
      </template>
    </v-container>
  </div>
</template>

<script async setup lang="ts">
// Router
const router = useRouter()

// ドメイン 環境変数読み込み
const runtimeConfig = useRuntimeConfig()
const domain = runtimeConfig.public.domain
// 診断設問
const questions = reactive([])

// 回答ステップ
const { step1, step2, step3 } = reactive(steps())

// 現在のステップ
const currentStep:number = ref(1)

// 設問読み込み
await useAsyncData('questions', () =>
  $fetch(
    domain + '/api/questions'
  )
)
  .then(({ data }) => {
    data.value.forEach((question) => {
      questions.push(question)
    })
  }
  )

/**
 * 回答送信
 * @return void
 */
async function clicksend (): void {
  const postData: {
    answers: Array<any>;
  } = {
    answers: questions
  }

  const { data } = await useFetch(domain + '/api/answer', {
    method: 'POST',
    body: postData
  })

  router.push('/result/' + data.value.result)
}
/**
 * ランダム入力
 * @return void
 */
function random (): void {
  questions.forEach((question) => {
    question.answer = Math.floor(Math.random() * 5) + 1
  })
}

/**
 * ランダム入力して回答結果へ
 * @return void
 */
function randomToResult (): void {
  random()
  nextTick(() => { clicksend() })
}

/**
 * 次の回答ステップに移動する
 * @return void
 */
function goNextStep (): void {
  // 次のステップを表示させる
  currentStep.value++

  // TODO 場所は要素指定できるようにする
  window.scrollTo(0, 100)
}
/**
 *  各stepに対して、全て回答があるかを判定
 *
 *  @param {number} start - そのstepの開始設問があるインデックス
 *  @param {number} end - そのstepの最終設問があるインデックス
 *  @return {boolean}
 */
const isCompleted = computed(():boolean => (start:number, end:number):boolean => {
  return questions.slice(start, end + 1).every(question => question.answer)
})
</script>

<style lang="scss" scoped>
.diagnosis-main-container {
  width:600px;
  .next-button {
    margin-top: 40px;
    display: block;
    width: 350px;
    height: 50px;
    background-color: #D9D9D9;
    color: #FFFFFF;
    font-size: 16px;
    letter-spacing: 0.05em;
    line-height: 26px;
    font-weight: 700;
    position: relative;
    transition: all .2s linear;
    cursor: not-allowed;
    &:before{
      content:"";
      position: absolute;
      top:50%;
      right:20px;
      width:20px;
      height:1px;
      background:#fff;
      transition: all .2s linear;
    }
    &:after {
      content: '';
      position: absolute;
      top: 42%;
      right: 12px;
      border: 6px solid transparent; // TODO 矢印の形状が倍率によって少しずれてしまう
      border-top-width: 4px;
      border-bottom-width: 4px;
      border-left-color: #fff;
      transition: all .2s linear;
    }
    &.filled-next-button{
      background-color: #FF9417;
      cursor: pointer;
      &:hover{
      background:#C06800;
      transition: all .2s linear;
    }
    }

  }

  .message-container {
    .message {
      font-weight: 700;
      font-size: 16px;
      color: #CCCCCC;
      span {
        color: #FF9417;
      }
    }
    .message-footer-line {
      width:110%;
      margin-top:5px;
      border: 1px solid #FF9417;
    }
  }
  @media screen and (max-width: 700px) {
    width:80vw;
    .next-button {
    margin-top: 20px;
    height: 50px;
  }
  }
}

</style>
