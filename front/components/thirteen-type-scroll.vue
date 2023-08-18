<script setup lang="ts">
import { ref } from 'vue'

import AcceptanceOfLife from '~/assets/svg/types/AcceptanceOfLife.vue'
import Accepting from '~/assets/svg/types/Accepting.vue'
import Achievement from '~/assets/svg/types/Achievement.vue'
import Activist from '~/assets/svg/types/Activist.vue'
import Altruist from '~/assets/svg/types/Altruist.vue'
import Cooperation from '~/assets/svg/types/Cooperation.vue'
import Hedonism from '~/assets/svg/types/Hedonism.vue'
import Hedonistic from '~/assets/svg/types/Hedonistic.vue'
import Love from '~/assets/svg/types/Love.vue'
import Meditative from '~/assets/svg/types/Meditative.vue'
import Moderation from '~/assets/svg/types/Moderation.vue'
import SelfDisciplined from '~/assets/svg/types/SelfDisciplined.vue'
import Variety from '~/assets/svg/types/Variety.vue'

const currentArray = ref([
  { id: 1, content: 'content1', component: AcceptanceOfLife },
  { id: 2, content: 'content2', component: Accepting },
  { id: 3, content: 'content3', component: Achievement },
  { id: 4, content: 'content4', component: Activist },
  { id: 5, content: 'content5', component: Altruist },
  { id: 6, content: 'content6', component: Cooperation },
  { id: 7, content: 'content7', component: Hedonism },
  { id: 8, content: 'content8', component: Hedonistic },
  { id: 9, content: 'content9', component: Love },
  { id: 10, content: 'content10', component: Meditative },
  { id: 11, content: 'content11', component: Moderation },
  { id: 12, content: 'content12', component: SelfDisciplined },
  { id: 13, content: 'content13', component: Variety }
])

</script>

<template>
  <div class="d-flex justify-center align-center flex-column">
    <div class="see-13-types">
      <p class="font-Kumbh-Sans">
        see 13 types
      </p>
      <NuxtLink to="/list" class="font-Zen-Kaku-Gothic-New">
        13のタイプ一覧を見る
      </NuxtLink>
    </div>
    <div class="scroll">
      <ul class="scroll-list">
        <li v-for="(n, index) in currentArray" :key="index">
          <component :is="n.component" :id="index" />
        </li>
      </ul>
      <ul class="scroll-list">
        <li v-for="(n, index) in currentArray" :key="index">
          <component :is="n.component" :id="index" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.see-13-types{
  margin-top: 92px;
  margin-bottom: 96px;
  :first-child{
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0.03em;
    text-align: left;
    margin-bottom:34px;
  }
  :last-child{
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0em;
    text-decoration: none;
    color: #383c3c;
    &:hover{
        cursor: pointer;
      }
  }
}
  .scroll {
    display: flex;
    overflow-x: hidden;
    padding: 30px;
    max-width: 1500px; // TODO: もし横幅全てでsvg表示するとなった場合ループの繋ぎが崩れてしまうので修正
    height: 330px;
    &-list {
      display: flex;
      align-items: center;
      animation: loop-slide 60s infinite linear 1s both;
    }
    li {
      min-width: 350px;
      list-style: none;
      padding-top:14px;
      border-top: 1px solid #383C3C;
      border-left: 1px solid #383C3C;
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

</style>
