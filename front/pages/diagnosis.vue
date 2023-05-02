
<template>
  <div>
    <v-container fluid class="d-flex align-center flex-column mb-3">
      <h1>トリセツ(Demo)</h1>
      <div>
        <v-btn
          class="text-center"
          prepend-icon="mdi-arrow-up-bold-box-outline"
          variant="outlined"
          @click="clicksend"
          color="success"
        >回答へ</v-btn>
        <v-btn
          class="text-center ml-3"
          prepend-icon="mdi-google-circles-extended"
          variant="outlined"
          @click="random"
          color="error"
        >ランダム入力</v-btn>
      </div>
      <v-card v-for="question in questions" :key="question.id">
        <v-card-item>
          <v-card-text class="text-center">{{ question.question_contents }}</v-card-text>
          <v-radio-group v-model="question.answer" inline>
            <v-radio
              v-for="choice in choices"
              :key="choice.value"
              :label="choice.text"
              :value="choice.value"
            ></v-radio>
          </v-radio-group>
        </v-card-item>
      </v-card>
    </v-container>
    <div class="d-flex justify-center mb-5">
      <v-btn
        class="text-center"
        prepend-icon="mdi-arrow-up-bold-box-outline"
        variant="outlined"
        @click="clicksend"
        color="success"
      >回答へ</v-btn>
    </div>
  </div>
</template>


<script async setup lang="ts">
// Router
const router = useRouter();

// 選択肢読み込み
const { choices } = useChoices();

const questions = reactive([])

// 設問読み込み
await useAsyncData('questions', () =>
  $fetch(
    'http://localhost:80/api/questions'
  )
)
  .then(({ data }) => {
    data.value.forEach( question => {
      questions.push(question)  
    })
})


/**
 * 回答送信
 * @return void
 */
async function clicksend(): void {
  const postData: {
    answers: Array<any>;
  } = {
    answers: questions
  };

  const { data } = await useFetch("http://localhost:80/api/answer", {
    method: "POST",
    body: postData
  });

  router.push("/result/" + data.value.result);
}
/**
 * ランダム入力
 * @return void
 */
async function random(): void {
  questions.forEach(question => {
    question.answer = Math.floor(Math.random() * 5) + 1;
  });
}
</script>
