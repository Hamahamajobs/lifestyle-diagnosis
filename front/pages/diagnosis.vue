
<template>
  <div>
    <v-container fluid class="d-flex align-center flex-column mb-3">
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
      </div>
      <!-- 診断step1 設問No1~No8 -->
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
          <v-btn
            class="text-center"
            prepend-icon="mdi-arrow-up-bold-box-outline"
            variant="outlined"
            color="success"
            @click="goNextStep"
          >
            次へ
          </v-btn>
        </div>
      </template>

      <!-- 診断step2 設問No9~No20 -->
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
          :question="questions[9+index]"
        />
        <div class="d-flex justify-center mb-5">
          <v-btn
            class="text-center"
            prepend-icon="mdi-arrow-up-bold-box-outline"
            variant="outlined"
            color="success"
            @click="goNextStep"
          >
            次へ
          </v-btn>
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
          :question="questions[19+index]"
        />
        <div class="d-flex justify-center mb-5">
          <v-btn
            class="text-center"
            prepend-icon="mdi-arrow-up-bold-box-outline"
            variant="outlined"
            color="success"
            @click="clicksend"
          >
            診断結果へ
          </v-btn>
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
  })

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
 * 次の回答ステップに移動する
 * @return void
 */
function goNextStep (): void {
  // 次のステップを表示させる
  currentStep.value++

  // TODO 場所は要素指定できるようにする
  window.scrollTo(0, 100)
}
</script>
<style lang="scss" scoped>
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

</style>
