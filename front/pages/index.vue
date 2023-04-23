<template>
  <div>
    <v-container fluid class="d-flex align-center flex-column mb-3">
      <h1>トリセツ(Demo)</h1>
      <div>
        <v-btn class="text-center" prepend-icon="mdi-arrow-up-bold-box-outline" variant="outlined" @click="clicksend" color="success">回答へ</v-btn>
      </div>
      <v-card v-for="question in questions" :key="question.id">
        <v-card-item>
          <v-card-text class="text-center">
            {{ question.question_contents }}
          </v-card-text>
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
      <v-btn class="text-center" prepend-icon="mdi-arrow-up-bold-box-outline" variant="outlined" @click="clicksend" color="orange-darken-2">診断結果へ</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
let { data: questions, refresh } = await useFetch(
  "http://localhost:80/api/questions"
);

const choices: { value: number; text: string }[] = [
  {
    value: 5,
    text: "いつもあてはまる",
  },
  {
    value: 4,
    text: "しばしばあてはまる",
  },
  {
    value: 3,
    text: "ときどきあてはまる",
  },
  {
    value: 2,
    text: "たまにあてはまる",
  },
  {
    value: 1,
    text: "全く当てはまらない",
  },
];

// 全ての設問を自動に回答を追加
// TODO デモのため自動
questions._rawValue.forEach((question) => {
  question.answer = Math.floor( Math.random() * 5 ) + 1;
});

async function clicksend(): void {
  
  const postData:{
    "answers":Array<any>
  } = {
    "answers": questions
  }
  
  // TODO urlをenvで切り替え
  const url =  "http://localhost:80/api/answer"
  
  const { data:result } = await useFetch(url, {
  method: 'POST',
  body: postData,
  });
  
  // TODO  Nuxtが用意してくれている通信用のメソッドが意味不明 どうなってんねん
  router.push("/result/" + result._rawValue.result);
}

function doRandomAnswer(): any {
  // 1~5までの乱数で自動回答
  questions._rawValue.forEach( question => {
    const num = Math.floor( Math.random() * 5 ) + 1 ;
    question.answer = num
  });
}
</script>
