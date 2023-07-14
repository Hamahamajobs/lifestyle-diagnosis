<script setup lang="ts">
import {ref, computed, onMounted} from 'vue';
import Test1 from '~/assets/svg/test.vue'
import Test2 from '~/assets/svg/test2.vue'
import Test3 from '~/assets/svg/test3.vue'


// 結果別のSVGを設定
const currentSvg = computed(() => (id) => {
  switch (id) {
    case 'altruist': return Test1
    case 'hedonistic': return Test1
    case 'love': return Test1
    case 'moderation': return Test1
    case 'accepting': return Test1
    case 'variety': return Test2
    case 'hedonism': return Test2
    case 'cooperation': return Test2
    case 'acceptance-of-life': return Test2
    case 'self-disciplined': return Test3
    case 'activist': return Test3
    case 'meditative': return Test3
    case 'achievement': return Test3
    default: return ''
  }
})

let currentArray = ref([
  {id: 1, content: 'content1', component: Test1},
  {id: 2, content: 'content2', component: Test2},
  {id: 3, content: 'content3', component: Test3},
  {id: 4, content: 'content4', component: Test1},
  {id: 5, content: 'content5', component: Test2},
  {id: 6, content: 'content6', component: Test3},
  {id: 7, content: 'content7', component: Test1},
  {id: 8, content: 'content8', component: Test2},
  {id: 9, content: 'content9', component: Test3},
  {id: 10, content: 'content10', component: Test1},
  {id: 11, content: 'content11', component: Test2},
  {id: 12, content: 'content12', component: Test3},
  {id: 13, content: 'content13', component: Test1},
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
          <component :is="n.component" :id="index"/>
        </li>
    </ul>
    <ul class="scroll-list">
        <li v-for="(n, index) in returnArray" :key="index">
          <component :is="n.component" :id="index" />
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
