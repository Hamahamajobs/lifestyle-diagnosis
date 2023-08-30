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

</script>

<template>
  <div class="list-content">
    <div class="list-content-items">
      <div
        v-for="(item, index) in morisTypes"
        :key="item.en"
        class="list-content-item"
        :class="`list-content-item-${item.en}`"
      >
        <div class="list-content-item-front">
          <component :is="currentSvg(item.en)" class="list-content-item-image"/>
          <div class="list-content-item-front-explain">
            ここに説明ここに説明ここに説明
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
        width: 73.5vw;
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
        background-color: white;
        padding-top: 10px;
        padding-bottom: 50px;
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
        &-explain {
          width: 21.5vw;
          text-align: center;
          @include pc {
            width: 26.5vw;
          }
          @include tab {
            width: 41.5vw;
          }
          @include sp {
            width: 87vw;
          }
        }
        &:hover {
          transform: rotateZ(-3deg);
        }
      }
      &-altruist {
        background-color: #6BCDAA;
      }
      &-hedonistic {
        background-color: #CD6BC3;
      }
      &-love {
        background-color: #CD6B6B;
      }
      &-moderation {
        background-color: #6BCD75;
      }
      &-accepting {
        background-color: #6BC7CD;
      }
      &-variety {
        background-color: #CDC36B;
      }
      &-hedonism {
        background-color: #B46BCD;
      }
      &-cooperation {
        background-color: #B4CD6B;
      }
      &-acceptance-of-life {
        background-color: #31365E;
      }
      &-self-disciplined {
        background-color: #6B75CD
      }
      &-activist {
        background-color: #CD886B;
      }
      &-meditative {
        background-color: #9B7049;
      }
      &-achievement {
        background-color: #DB4A4A;
      }
    }
  }
  &-item {
    background-color: white;
  }
}
</style>
