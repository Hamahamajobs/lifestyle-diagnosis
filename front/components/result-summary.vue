<script setup lang="ts">
// --- Props ---
const props = defineProps<{
  type: Object;
  svg: Object;
}>()
</script>

<template>
  <div class="summary-container d-flex justfy-center flex-column align-center">
    <p class="summary-title font-Kumbh-Sans">
      summary
    </p>
    <div
      class="summary-card d-flex justfy-center flex-column align-center"
      :class="props.type.en"
    >
      <div class="svg-container">
        <component :is="props.svg" class="type-image" :size="'0 0 2160 1620'" />
      </div>
      <div
        class="summary-card-content d-flex justfy-center flex-column align-center font-Zen-Kaku-Gothic-New"
      >
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
  </div>
</template>

<style lang="scss" scoped>
.summary-container {
  .summary-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 0.03em;
    margin-bottom: 3px;
    @include sp {
      margin-top: 70px;
    }
  }
  .summary-card {
    width: 710px;
    height: auto; // 中身の文章量によって可変であるべきなのでauto指定
    color: #383c3c;
    border: 1px solid #383c3c;
    box-shadow: 15px 15px #9775bf;
    padding-bottom:30px;
    @include sp {
      width: 95%; // figmaでは350pxであるが画面幅の広いスマホ端末だとカードが小さく見えるため90%を指定
      box-shadow: none;
      margin-top: 3px;
      padding-bottom: 2.5%;
    }
    .summary-card-content {
      background: #fff;
      width: 650px;
      height: 565px;
      @include sp {
        width: 95%;
        padding-top :5%;
        padding-bottom :5%;
        height: auto;
      }
    }
    .svg-container {
      text-align: center;
      width: 440px;
      height: 390px;
      margin-top: 30px;
      margin-bottom: 20px;
      @include sp {
        width: 95%;
        margin-top: 5px;
        margin-bottom: 0;
      }
    }
    .introduction {
      font-size: 20px;
      font-weight: 500;
      margin-top: 20px;
      width: 279px;
      text-align: center;
      background: #393d3d;
      color: #fff;
    }
    .type {
      font-size: 40px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 0.15em;
      text-align: center;
      margin-top: 10px;
      @include sp {
        margin-top: 15px;
      }
    }
    .summary-title {
      font-size: 20px;
      font-weight: 700;
      line-height: 45px;
      letter-spacing: 0.03em;
      text-align: left;
      margin-top: 10px;
      margin-bottom: 10px;
      @include sp {
        width:70%;
        font-weight: 600;
        margin-bottom: 30px;
      }
    }
    .summary-contents {
      margin-top: 10px;
      @include sp {
        width: 85%;
      }
      .summary-block {
        width: 412px;
        @include sp {
          width: 95%;
        }
        .question {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-align: left;
          color:#43446C;
          @include sp {
            font-weight: 500;
          }
        }
        .summary-text {
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.03em;
          text-align: left;
          color: #383c3c;
          margin-bottom: 1rem;
          margin-top: 0.5rem;
          @include sp {
            margin-top: 0.2rem;
            margin-bottom: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
