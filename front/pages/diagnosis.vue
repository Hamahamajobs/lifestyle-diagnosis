
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
        <v-btn
          class="text-center ml-3"
          prepend-icon="mdi-google-circles-extended"
          variant="outlined"
          color="error"
          @click="hamada"
        >
          btn
        </v-btn>
      </div>
      <div class="message-container d-flex flex-column align-center">
        <p class="message">
          <span>あ</span>まり考えずに、迷ったら直感で答えましょう！
        </p>
        <hr class="message-footer-line">
      </div>
      <div v-for="question in questions" :key="question.id">
        <question
          :question="question"
        />
      </div>
    </v-container>
    <div class="d-flex justify-center mb-5">
      <v-btn
        class="text-center"
        prepend-icon="mdi-arrow-up-bold-box-outline"
        variant="outlined"
        color="success"
        @click="clicksend"
      >
        回答へ
      </v-btn>
    </div>
  </div>
</template>

<script async setup lang="ts">
// Router
const router = useRouter()

const { counter, answers, addCounter } = useCounter()

// 環境変数読み込み
const runtimeConfig = useRuntimeConfig()
const domain = runtimeConfig.public.domain

const questions = reactive([])

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

// useState
function hamada (): void {
  console.log(counter.value)
  addCounter(5)
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
