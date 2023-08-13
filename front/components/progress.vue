<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

// --- Props ---
const props = defineProps < {
  step : 0,
} >()
</script>

<template>
  <div class="progress-container font-Lora">
    <template v-if="props.step === 1">
      <div class="step d-flex justify-center align-center">
        <div class="current d-flex flex-column align-center">
          <span class="page">page</span>
          <span class="current-num">1</span>
        </div>
        <div class="other">
          <span>2</span>
        </div>
        <div class="other">
          <span>3</span>
        </div>
      </div>
    </template>
    <template v-if="props.step === 2">
      <div class="step d-flex justify-center align-center">
        <div class="other">
          <span>1</span>
        </div>
        <div class="current d-flex flex-column align-center">
          <span class="page">page</span>
          <span class="current-num">2</span>
        </div>
        <div class="other">
          <span>3</span>
        </div>
      </div>
    </template>
    <template v-if="props.step === 3">
      <div class="step d-flex justify-center align-center">
        <div class="other">
          <span>1</span>
        </div>
        <div class="other">
          <span>2</span>
        </div>
        <div class="current d-flex flex-column align-center">
          <span class="page">page</span>
          <span class="current-num">3</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.progress-container{
  margin-top:30px;
  .step{
    div{
      width: 59px;
      height: 59px;
      background-color:#F1F1F1;
      border-radius:50%;
      color:#FFFFFF;
      margin-right: 20px;
    }
    .other{
      text-align: center;
      background: #F1F1F1;
      span {
        display:inline-block;
        font-size: 36px;
        font-weight: 700;
        line-height: 46px;
        letter-spacing: 0.05em;
        margin-top:5px;
      }
    }
    .current{
      width: 93px;
      height: 93px;
      background-color: #EAD3F0;
      border-radius:50%;
      font-size: 48px;
      font-weight: 700;
      line-height: 61px;
      letter-spacing: 0.05em;
      .page{
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: 0.05em;
        margin-top: 15px;
      }
      .current-num{
        margin-top:-6px;
      }

    }
  }
}
</style>
