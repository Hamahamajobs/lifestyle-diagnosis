<template>
  <div>
    <v-container
      fluid
      class="diagnosis-main-container d-flex align-center flex-column"
    >
      <div class="mb-3">
        <!-- TODO: 後で消す -->
        <v-btn
          style="position: fixed; top: 10%; right: 10%; z-index: 9999"
          color="blue"
          @click="randomToResult"
        >
          【開発用】ランダム入力
        </v-btn>
      </div>
      <div class="result-text d-flex justify-center">
        <div class="d-flex flex-column">
          <div class="water-drops-contaner d-flex justify-center align-end">
            <WaterDropBlackSmallLeft class="water-drops-small" />
            <WaterDropBlackBig class="water-drops-big" />
            <WaterDropBlackSmallRight class="water-drops-small" />
          </div>

          <p class="font-Zen-Kaku-Gothic-New" @click="randomToResult">
            診断中
          </p>
        </div>
      </div>
      <!-- 進捗状況 -->
      <div class="progress">
        <Progress :step="currentStep" />
      </div>
      <!-- 診断step1 設問No1~No10 -->
      <template v-if="currentStep === 1">
        <div class="message-container d-flex flex-column align-center">
          <p class="message font-Zen-Kaku-Gothic-New">
            あまり考えずに、迷ったら直感で答えましょう！
          </p>
        </div>
        <question v-for="index in 10" :key="index" :question="questions[index - 1]" />
        <div class="d-flex justify-center mb-5">
          <button
            class="next-button"
            :class="{ 'filled-next-button': isCompleted(step1.start, step1.end) }"
            :disabled="!isCompleted(step1.start, step1.end)"
            type="button"
            @click="goNextStep"
          >
            <span id="first-delimiter">次へ</span>
          </button>
        </div>
      </template>

      <!-- 診断step2 設問No11~No20 -->
      <template v-if="currentStep === 2">
        <div class="message-container d-flex flex-column align-center">
          <p class="message">
            いいペースです！このまま直感的に回答していきましょう。
          </p>
          <hr class="message-footer-line">
        </div>
        <question
          v-for="index in 10"
          :key="index"
          :question="questions[step1.end + index]"
        />
        <div class="d-flex justify-center mb-5">
          <button
            class="next-button"
            :class="{ 'filled-next-button': isCompleted(step2.start, step2.end) }"
            :disabled="!isCompleted(step2.start, step2.end)"
            type="button"
            @click="goNextStep"
          >
            <span id="second-delimiter">次へ</span>
          </button>
        </div>
      </template>

      <!-- 診断step3 設問No21~No28 -->
      <template v-if="currentStep === 3">
        <div class="message-container d-flex flex-column align-center">
          <p class="message">
            このページが最後です！残り8問で診断結果が出ます。
          </p>
          <hr class="message-footer-line">
        </div>
        <question
          v-for="index in 8"
          :key="index"
          :question="questions[step2.end + index]"
        />
        <div class="d-flex justify-center mb-5">
          <button
            class="next-button"
            :class="{ 'filled-next-button': isCompleted(step3.start, step3.end) }"
            :disabled="!isCompleted(step3.start, step3.end)"
            type="button"
            @click="clicksend"
          >
            <span id="final-delimiter">診断結果へ</span>
          </button>
        </div>
      </template>
    </v-container>
  </div>
</template>

<script async setup lang="ts">
import WaterDropBlackBig from '~/assets/svg//waterdrops/bigblack.vue'
import WaterDropBlackSmallLeft from '~/assets/svg//waterdrops/small1black.vue'
import WaterDropBlackSmallRight from '~/assets/svg//waterdrops/small2black.vue'

const { start, close } = loadingController()

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
const currentStep: number = shallowRef(1)

// 設問読み込み
start()
await useAsyncData('questions', () => $fetch(domain + '/api/questions')).then(
  ({ data }) => {
    close()
    data.value.forEach((question) => {
      questions.push(question)
    })
  }
).catch(() => {
  close()
  // FIXME: Nuxtがキャッシュを使用するのかエラーになった後に再度APIコールするとNuxt内で別エラーが発生 いつか修正する
  alert('申し訳ございません。エラーが発生しました。リロードするかしばらく経ってから再度お試しください。')
  router.push('/')
})

/**
 * 回答送信
 * @return void
 */
async function clicksend (): void {
  start()
  const postData: {
    answers: Array<any>;
  } = {
    answers: questions
  }

  const { data, error } = await useFetch(domain + '/api/answer', {
    method: 'POST',
    body: postData
  })
  if (error.value) {
    close()
    // FIXME: Nuxtがキャッシュを使用するのかエラーになった後に再度APIコールするとNuxt内で別エラーが発生 いつか修正する
    alert('申し訳ございません。エラーが発生しました。リロードするかしばらく経ってから再度お試しください。')
    router.push('/')
    return
  }
  router.push('/result/' + data.value.result)
  close()
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
  nextTick(() => {
    clicksend()
  })
}

/**
 * 次の回答ステップに移動する
 * @return void
 */
function goNextStep (): void {
  // 次のステップを表示させる
  currentStep.value++

  // TODO 場所は要素指定できるようにする
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
/**
 *  各stepに対して、全て回答があるかを判定
 *
 *  @param {number} start - そのstepの開始設問があるインデックス
 *  @param {number} end - そのstepの最終設問があるインデックス
 *  @return {boolean}
 */
const isCompleted = computed((): boolean => (start: number, end: number): boolean => {
  return questions.slice(start, end + 1).every(question => question.answer)
})
</script>

<style lang="scss" scoped>
.diagnosis-main-container {
  width: 600px;
  padding-bottom:150px;
  .water-drops-contaner {
    .water-drops-small {
      margin: 40px 0 0;
    }
    .water-drops-big {
      margin: 0;
    }
  }
  .result-text {
    font-size: 30px;
    font-weight: 500;
    line-height: 43px;
    margin-top: 70px;
    p {
      display: inline-block;
      text-align: center;
      width: 230px;
      top: 169px;
      left: 526px;
      color: #333;
      border-top: 1.5px solid #333;
      border-bottom: 1.5px solid #333;
      margin-top: 8px;
    }
  }
  .next-button {
    margin-top: 40px;
    display: block;
    width: 350px;
    height: 50px;
    background-color: #d9d9d9;
    color: #fff;
    font-size: 16px;
    letter-spacing: 0.05em;
    line-height: 26px;
    font-weight: 700;
    position: relative;
    transition: all 0.2s linear;
    cursor: not-allowed;
    &::before {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 20px;
      height: 1px;
      background: #fff;
      transition: all 0.2s linear;
    }
    &::after {
      content: "";
      position: absolute;
      top: 42%;
      right: 12px;
      border: 6px solid transparent; // TODO 矢印の形状が倍率によって少しずれてしまう
      border-top-width: 4px;
      border-bottom-width: 4px;
      border-left-color: #fff;
      transition: all 0.2s linear;
    }
    &.filled-next-button {
      background: #f19a75;
      cursor: pointer;
      &:hover {
        // opacity: 0.7;
        background: #cb6e46;
        transition: all 0.2s linear;
      }
    }
  }
  .message-container {
    margin-top: 20px;
    .message {
      font-weight: 700;
      font-size: 16px;
      color: #41365a;
      line-height: 23px;
      letter-spacing: 0.05em;
      background: #f1f1f1;
      margin-bottom: 83px;
    }
  }
  @media screen and (width <= 700px) {
    width: 80vw;
    .next-button {
      margin-top: 20px;
      height: 50px;
    }
  }
}
</style>
