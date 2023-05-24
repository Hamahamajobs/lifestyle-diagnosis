
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

// 設問系
// const a  = 1;

// アンケート系
// adfasdf

// お問い合わせ系
// asdfasfd

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
