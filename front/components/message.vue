<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface Message {
  title: string;
  text: string;
}

// --- Props ---
const props = defineProps<{
  type: '';
  label: '';
  ask: '';
  messages: Message[];
}>()
</script>

<template>
  <div class="message-container">
    <p class="font-La-Belle-Aurore label">
      {{ props.label }}
    </p>
    <div
      class="ask-container mb-5 d-flex justify-end align-center font-Zen-Kaku-Gothic-New"
    >
      <p class="ask">
        {{ props.ask }}
      </p>
    </div>

    <div
      v-for="(message, index) in props.messages"
      :key="index"
      class="contents-container"
    >
      <p class="title font-Zen-Kaku-Gothic-New">
        {{ message.title }}
      </p>
      <p class="contents">
        {{ message.text }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-container {
  margin-left: 20%;
  margin-top: 50px;
  color: #383c3c;
  @include sp {
    margin-left: 5%;
  }
  .label {
    color: #41426a;
    font-size: 60px;
    font-weight: 400;
    line-height: 111px;
    letter-spacing: 0.03em;
    margin-left: -70px;
    margin-bottom: -55px;
    @include sp {
      font-size: 40px;
      font-weight: 400;
      line-height: 74px;
      margin-left: -9px; // -10pxは被ってしまうので微調整
      margin-bottom: -30px;
    }
  }
  .ask-container {
    .ask {
      width: 100%;
      padding: 9.5px 0 9.5px 4%;
      font-size: 24px;
      font-weight: 700;
      z-index: -1;
      background: linear-gradient(to left, #debaea, #fef9e7);
      @include sp {
        margin-left: 5px;
        background: linear-gradient(90deg, #fef9e7 0%, #fef9e7 72.92%, #debbea 100%);
        font-size: 18px;
        font-weight: 500;
        line-height: 26px;
      }
    }
  }
  .contents-container {
    margin-bottom: 120px;
    width: 70%;
    @include sp {
      width: 90%;
      margin: 0 5%;
    }
    .title {
      margin-top: 41px;
      font-size: 32px;
      font-weight: 600;
      line-height: 46px;
      letter-spacing: 0.03em;
      @include sp {
        font-size: 20px;
        font-weight: 500;
        line-height: 29px;
      }
    }
    .contents {
      margin-top: 36px;
      font-size: 16px;
      font-weight: 500;
      line-height: 35px;
      letter-spacing: 0.03em;
    }
  }
}
</style>
