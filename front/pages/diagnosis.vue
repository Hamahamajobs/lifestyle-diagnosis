
<template>
  <div>
    <v-container fluid class="d-flex align-center flex-column mb-3">
      <h1>トリセツ(Demo)</h1>
      <div>
        <v-btn
          class="text-center"
          prepend-icon="mdi-arrow-up-bold-box-outline"
          variant="outlined"
          color="success"
          @click="clicksend"
        >
          回答へ
        </v-btn>
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
</script>
