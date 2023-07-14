<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';

//　無理やり作るならこれ
let currentArray = ref([
  {id: 1, content: 'content1'},
  {id: 2, content: 'content2'},
  {id: 3, content: 'content3'},
  {id: 4, content: 'content4'},
  {id: 5, content: 'content5'},
  {id: 6, content: 'content6'},
  {id: 7, content: 'content7'},
  {id: 8, content: 'content8'},
  {id: 9, content: 'content9'},
  {id: 10, content: 'content10'},
  {id: 11, content: 'content11'},
  {id: 12, content: 'content12'},
  {id: 13, content: 'content13'},
]);

let returnArray = computed(
  (): {id: number; content: string;}[] => {
    return currentArray.value;
  }
)
</script>

<template>
  <div class="scroll">
    <ul class="scroll-list">
        <li v-for="(n, index) in returnArray" :key="index">
          {{ n.content }}
        </li>
    </ul>
    <ul class="scroll-list">
        <li v-for="(n, index) in returnArray" :key="index">
          {{ n.content }}
        </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .scroll {
    margin: 20px;
    display: flex;
    // -webkit-box-align: center;
    // -ms-flex-align: center;
    // align-items: center;
    // height: 180px;
    overflow-y: hidden;
    // border: 2px solid;
    padding: 30px;
    max-width: 1500px;
    &-list {
      display: flex;
      align-items: center;
      animation: loop-slide 60s infinite linear 1s both;
    }
    li {
      min-width: 350px
    }
  }
  @keyframes loop-slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  .slice-paused:hover {
    animation-play-state: paused;
  }
</style>