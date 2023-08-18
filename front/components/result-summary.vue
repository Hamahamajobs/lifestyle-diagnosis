<script setup lang="ts">
// --- Props ---
const props = defineProps < {
  type: Object,
  svg: Object
} >()

</script>

<template>
  <div class="summary-container d-flex justfy-center flex-column align-center">
    <p class="summary-title font-Kumbh-Sans">
      summary
    </p>
    <div class="summary-card d-flex justfy-center flex-column align-center" :class="props.type.en">
      <div class="svg-container">
        <component :is="props.svg" class="type-image" :size="'0 0 2160 1620'" />
      </div>
      <div class="summary-card-content d-flex justfy-center flex-column align-center font-Zen-Kaku-Gothic-New">
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
            <p class="question" :class="`${type.en}-text-color`">
              あなたの、特徴は？
            </p>
            <p class="summary-text">
              {{ props.type.messageList[0].messageContent[0].title }}精神的に安定
            </p>
          </div>
          <div class="summary-block">
            <p class="question" :class="`${type.en}-text-color`">
              あなたの、恋愛観は？
            </p>
            <p class="summary-text">
              {{ props.type.messageList[1].messageContent[0].title }}精神的に安定
            </p>
          </div>
          <div class="summary-block">
            <p class="question" :class="`${type.en}-text-color`">
              あなたの、裏の顔は？
            </p>
            <p class="summary-text">
              {{ props.type.messageList[2].messageContent[0].title }}精神的に安定
            </p>
          </div>
          <div class="summary-block">
            <p class="question" :class="`${type.en}-text-color`">
              人生最後に後悔すること
            </p>
            <p class="summary-text">
              {{ props.type.messageList[3].messageContent[0].title }}精神的に安定
            </p>
          </div>
          <div class="summary-block">
            <p class="question" :class="`${type.en}-text-color`">
              あなたに大切にしてほしい価値観
            </p>
            <p class="summary-text">
              {{ props.type.messageList[4].messageContent[0].title }}精神的に安定
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.summary-container{
  .summary-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0.03em;
    margin-bottom: 3px;
  }
  .summary-card{
    width: 710px;
    height: 1029px;
    color:#383C3C;
    border: 1px solid #383C3C;
    box-shadow: 15px 15px #9775BF;
    .summary-card-content{
      background:#FFFFFF;
      width: 650px;
      height: 565px;
    }
    .svg-container{
      text-align:center;
      width: 440px;
      height: 390px;
      margin-top:30px;
      margin-bottom:20px;
    }
    .introduction{
      font-size: 20px;
      font-weight: 500;
      margin-top:20px;
      width: 279px;
      text-align:center;
      background: #393D3D;
      color: #FFFFFF;
    }
    .type{
      font-size: 40px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 0.15em;
      text-align: center;
      margin-top:10px;
    }
    .summary-title{
      font-size: 20px;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0.03em;
      text-align: left;
      margin-top:10px;
      margin-bottom:10px;
    }
    .summary-contents{
      margin-top:10px;
      .summary-block{
        width:412px;
        .question{
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-align: left;
        }
        .summary-text{
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-align: left;
          color:#383C3C;
          margin-bottom:1rem;
          margin-top:0.5rem;
        }
      }
    }

  }
}
</style>
