<script setup lang="ts">
// --- Props ---
const props = defineProps < {
  type: Object
} >()

</script>

<template>
  <div class="summary-container d-flex justfy-center flex-column align-center">
    <p class="summary-title font-La-Belle-Aurore">
      summary
    </p>
    <div class="summary-card d-flex justfy-center flex-column align-center">
      <!-- TODO: SVGファイルのサイズを呼び出し元から変えれるのか? -->
      <div class="svg-container" />
      <p class="introduction">
        あなたの生き方の取扱説明書
      </p>
      <p class="type" :class="`${type.en}-text-color`">
        {{ props.type.jp }}
      </p>
      <p class="summary-title">
        {{ props.type.title }}
      </p>
      <div class="summary-contents">
        <div class="summary-block">
          <p class="question">
            あなたの、特徴は？
          </p>
          <p class="summary-text">
            {{ props.type.messageList[0].messageContent[0].title }}精神的に安定
          </p>
        </div>
        <div class="summary-block">
          <p class="question">
            あなたの、恋愛観は？
          </p>
          <p class="summary-text">
            {{ props.type.messageList[1].messageContent[0].title }}精神的に安定
          </p>
        </div>
        <div class="summary-block">
          <p class="question">
            あなたの、裏の顔は？
          </p>
          <p class="summary-text">
            {{ props.type.messageList[2].messageContent[0].title }}精神的に安定
          </p>
        </div>
        <div class="summary-block">
          <p class="question">
            人生最後に後悔すること
          </p>
          <p class="summary-text">
            {{ props.type.messageList[3].messageContent[0].title }}精神的に安定
          </p>
        </div>
        <div class="summary-block">
          <p class="question">
            あなたに大切にしてほしい価値観
          </p>
          <p class="summary-text">
            {{ props.type.messageList[4].messageContent[0].title }}精神的に安定
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summary-container{
  .summary-title {
    font-size: 64px;
    font-weight: 400;
    line-height: 119px;
    letter-spacing: 0.03em;
    text-align: left;
    margin-bottom:-30px;
  }

  .summary-card{
    width: 710px;
    height: 1029px;
    color:#383C3C;
    border: 1px solid #383C3C;
    box-shadow: 15px 15px #B0A997;

    .svg-container{
      text-align:center;
      width: 450px;
      height: 450px;
      border-radius:50%;
      background-color:gray;
      margin-top:30px;
    }

    .introduction{
      margin-top:15px;
      width: 279px;
      padding: 2px;
      background: #393D3D;
      font-family: "Shippori Mincho B1";
      font-size: 20px;
      font-weight: 700;
      letter-spacing: 0.03em;
      color: #FFF;
    }

    .type{
      font-family: "Shippori Mincho B1";
      font-size: 40px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 0.15em;
      text-align: center;
      margin-top:10px;
    }

    .summary-title{
      font-family: "Shippori Mincho B1";
      font-size: 20px;
      font-weight: 700;
      line-height: 30px;
      letter-spacing: 0.03em;
      text-align: left;
      border-bottom: 1px solid #383C3C;
      margin-top:10px;
      color:#383C3C;
    }

    .summary-contents{
      margin-top:45px;

      .summary-block{
        width:412px;

        .question{
          font-family: "Shippori Mincho B1";
          font-size: 16px;
          font-weight: 700;
          line-height: 25px;
          letter-spacing: 0.03em;
          text-align: left;
          color: #B0A997;
        }

        .summary-text{
          font-family: "Shippori Mincho B1";
          font-size: 16px;
          font-weight: 500;
          line-height: 25px;
          letter-spacing: 0.03em;
          text-align: left;
          color:#383C3C;
          margin-bottom:20px;
          // background:red;
        }
      }
    }

  }
}
</style>
