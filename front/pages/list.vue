<script setup lang="ts">

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

const { morisTypes } = reactive(getMorisTypes())

// Router
const router = useRouter()

// 結果別のSVGを設定
const currentSvg = computed(() => (id) => {
  switch (id) {
    case 'altruist':
      return Altruist
    case 'hedonistic':
      return Hedonistic
    case 'love':
      return Love
    case 'moderation':
      return Moderation
    case 'accepting':
      return Accepting
    case 'variety':
      return Variety
    case 'hedonism':
      return Hedonism
    case 'cooperation':
      return Cooperation
    case 'acceptance-of-life':
      return AcceptanceOfLife
    case 'self-disciplined':
      return SelfDisciplined
    case 'activist':
      return Activist
    case 'meditative':
      return Meditative
    case 'achievement':
      return Achievement
    default:
      return ''
  }
})

function goResult(id) {
  router.push('/result/' + id);
};

</script>

<template>
  <div class="list-content">
    <div class="list-content-items">
      <div
        v-for="(item) in morisTypes"
        :key="item.en"
        class="list-content-item"
        :class="`list-content-item-${item.en}`"
        @click="goResult(item.en)"
      >
        <div class="list-content-item-front">
          <component :is="currentSvg(item.en)" class="list-content-item-image" />
          <div class="list-content-item-front-explain">
            <div class="list-content-item-front-explain-jp" :class="`${item.en}-text-color`">
              {{ item.jp }}
            </div>
            <div class="list-content-item-front-explain-title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  &-content {
    background-color: #EAD3F0;
    &-items {
      padding-top: 100px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      &::after {
        content: "";
        width: 69vw;
        @include pc {
          width: 59vw;
        }
        @include tab {
          width: 44.5vw;
        }
        @include sp {
          width: 87vw;
        }
      }
    }
    &-item {
      margin: 1.5vw;
      &-front {
        border: 1px black solid;
        background-color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        width: 20vw;
        transition: 0.3s;
        @include pc {
          width: 26.5vw;
        }
        @include tab {
          width: 41.5vw;
        }
        @include sp {
          width: 87vw;
        }
        &-explain {
          width: 20vw;
          @include pc {
            width: 26.5vw;
          }
          @include tab {
            width: 41.5vw;
          }
          @include sp {
            width: 87vw;
          }
          &-jp {
            text-align: center;
            font-size: 2vw;
            @include pc {
              font-size: 2.5vw;
            }
            @include tab {
              width: 41.5vw;
            }
            @include sp {
              width: 87vw;
              font-size: 6vw;
            }
          }
          &-title {
            margin: 0 auto;
            width: 80%;
            font-size: 1vw;
            @include pc {
              font-size: 1.5vw;
            }
            @include tab {
            }
            @include sp {
              font-size: 4vw;
            }
          }
        }
        &:hover {
          transform: rotateZ(-5deg);
        }
      }
      &-altruist {
        background: linear-gradient(-20deg, #7E5DA4 0%, #6BCDAA 100%);
      }
      &-hedonistic {
        background: linear-gradient(-20deg, #7E5DA4 0%, #CD6BC3 100%);
      }
      &-love {
        background: linear-gradient(-20deg, #7E5DA4 0%, #CD6B6B 100%);
      }
      &-moderation {
        background: linear-gradient(-20deg, #7E5DA4 0%, #6BCD75 100%);
      }
      &-accepting {
        background: linear-gradient(-20deg, #7E5DA4 0%, #6BC7CD 100%);
      }
      &-variety {
        background: linear-gradient(-20deg, #7E5DA4 0%, #CDC36B 100%);
      }
      &-hedonism {
        background: linear-gradient(-20deg, #7E5DA4 0%, #B46BCD 100%);
      }
      &-cooperation {
        background: linear-gradient(-20deg, #7E5DA4 0%, #B4CD6B 100%);
      }
      &-acceptance-of-life {
        background: linear-gradient(-20deg, #7E5DA4 0%, #31365E 100%);
      }
      &-self-disciplined {
        background: linear-gradient(-20deg, #7E5DA4 0%, #6B75CD 100%);
      }
      &-activist {
        background: linear-gradient(-20deg, #7E5DA4 0%, #CD886B 100%);
      }
      &-meditative {
        background: linear-gradient(-20deg, #7E5DA4 0%, #9B7049 100%);
      }
      &-achievement {
        background: linear-gradient(-20deg, #7E5DA4 0%, #DB4A4A 100%);
      }
    }
  }
  &-item {
    background-color: white;
  }
}
</style>
