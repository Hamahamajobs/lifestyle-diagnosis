<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
interface Message {
  title: string;
  text: string;
}

// --- Props ---
const props = defineProps < {
  type :'',
  label: '',
  ask: '',
  messages: Message[]
} >()

</script>

<template>
  <div class="message-container">
    <p class="font-La-Belle-Aurore label">
      {{ props.label }}
    </p>
    <div class="ask-container mb-5 d-flex justify-end align-center font-Shippori-Mincho-B1">
      <p class="ask" :class="`${props.type}-row`">
        {{ props.ask }}
      </p>
    </div>

    <div v-for="(message, index) in props.messages" :key="index" class="contents-container">
      <p class="title font-Shippori-Mincho-B1">
        {{ message.title }}
      </p>
      <p class="contents">
        {{ message.text }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message-container{
  margin-left:20%;
  margin-top:50px;
  color:#383C3C;
  .label{
      color:#B0A997;
      font-size: 60px;
      font-weight: 400;
      line-height: 111px;
      letter-spacing: 0.03em;
      margin-left: -70px;
      margin-bottom: -55px;
    }
  .ask-container{
    .ask{
      width:100%;
      padding: 9.5px 0 9.5px 4%;
      font-size: 24px;
      font-weight: 700;
      z-index:-1;
    }
  }
  .contents-container {
    margin-bottom:120px;
    width:70%;
    .title{
      margin-top:41px;
      font-size: 32px;
      font-weight: 600;
      line-height: 46px;
      letter-spacing: 0.03em;
    }
    .contents{
      margin-top:36px;
      font-size: 16px;
      font-weight: 500;
      line-height: 35px;
      letter-spacing: 0.03em;
    }
  }
}
</style>
