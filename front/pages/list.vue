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
    <div class="list-content-title">
      <p class="list-content-title-p">13タイプ一覧</p>
    </div>
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

    <!-- <div class="list2-content-items">
      <div
        v-for="(item) in morisTypes"
        :key="item.en"
        class="list2-content-item"
        :class="`list2-content-item-${item.en}`"
        @click="goResult(item.en)"
      >
        <div class="list2-content-item-front">
          <component :is="currentSvg(item.en)" class="list2-content-item-image" />
          <div class="list2-content-item-front-explain">
            <div class="list2-content-item-front-explain-jp" :class="`${item.en}-text-color`">
              {{ item.jp }}
            </div>
            <div class="list2-content-item-front-explain-title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- 鏡デザイン 僕のCSS技術じゃ限界ありました。 -->
    <!-- <div class="octagon octagon-color">
      <div class="box-content">
        <div class="octagon-2 octagon-color-2">
          <div class="box-content-2">
            <div class="octagon-3 octagon-color-3">
              <div class="box-content-3">
                <div class="octagon-4 octagon-color-4">
                  <div class="box-content-4">
                    <div class="octagon-5 octagon-color-5">
                      <div class="box-content-5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

  </div>
</template>

<style lang="scss" scoped>
.list {
  &-content {
    background-color: #EAD3F0;
    &-title {
      padding-top: 100px;
      text-align: center;
      font-size: 24px;
      font-weight: 700;
      color: #41365A;
      @include sp {
        padding-top: 50px;
      }
    }
    &-items {
      padding-top: 20px;
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
          // width: 44.5vw;
        }
        @include sp {
          // width: 87vw;
          width: 44.5vw;
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
          // width: 41.5vw;
        }
        @include sp {
          // width: 87vw;
          width: 41.5vw;
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
            // width: 87vw;
            width: 41.5vw;
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
              // width: 87vw;
              width: 41.5vw;
              font-size: 5vw;
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
              font-size: 2.5vw;
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


.list2 {
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
        position: relative;
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
        &::before {
          position: absolute;
          top: 0;
          // left: -75%;
          left: -490px;
          z-index: 100;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          background: -webkit-linear-gradient(left, rgba(0,0,0,0) 0%, rgba(0,0,0,.3) 100%);
          background: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,.3) 100%);
          // background-color: rgba(0,0,0,1);
          -webkit-transform: skewX(-25deg);
          transform: skewX(-25deg);
        }
        &:hover::before{
          -webkit-animation: shine .75s;
          animation: shine .75s;
        }
        // &:hover {
        //   transform: rotateZ(-5deg);
        // }
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

@-webkit-keyframes shine {
  100% {
    // left: 125%;
    left: 500px;
  }
}
@keyframes shine {
  100% {
    // left: 125%;
    left: 500px;
  }
}

// 鏡デザイン　ボツ
// .box-content {
//   height: 500px;
//   &-2 {
//     height: 480px;
//   }
//   &-3 {
//     height: 450px;
//   }
//   &-4 {
//     height: 440px;
//   }
//   &-5 {
//     height: 420px;
//   }
// }
// .octagon {
//   left: 200px;
//   position: relative;
//   width: 20%;
//   &-2{
//     position: absolute;
//     margin-left: 10px;
//     margin-top: 10px;

//     width: 95%;
//     &:before {
//       display: block;
//       content: "";
//       width: 100%;
//       position: absolute;
//       left: 0;
//       right: 0;
//       border: 20px solid transparent;
//       bottom: 100%;
//       border-bottom-color: inherit;
//     }
//     &:after {
//       display: block;
//       content: "";
//       width: 100%;
//       position: absolute;
//       left: 0;
//       right: 0;
//       border: 20px solid transparent;
//       top: 100%;
//       border-top-color: inherit;
//       z-index: 2;
//     }
//   }
//   &-3{
//     position: absolute;
//     margin-left: 15px;
//     margin-top: 15px;

//     width: 92%;
//     &:before {
//       display: block;
//       content: "";
//       width: 100%;
//       position: absolute;
//       left: 0;
//       right: 0;
//       border: 20px solid transparent;
//       bottom: 100%;
//       border-bottom-color: inherit;
//     }
//     &:after {
//       display: block;
//       content: "";
//       width: 100%;
//       position: absolute;
//       left: 0;
//       right: 0;
//       border: 20px solid transparent;
//       top: 100%;
//       border-top-color: inherit;
//       z-index: 3;
//     }
//   }
//   &-4{
//     position: absolute;
//     margin-left: 5px;
//     margin-top: 5px;

//     width: 97%;
//     &:before {
//       display: block;
//       content: "";
//       width: 100%;
//       position: absolute;
//       left: 0;
//       right: 0;
//       border: 20px solid transparent;
//       bottom: 100%;
//       border-bottom-color: inherit;
//     }
//     &:after {
//       display: block;
//       content: "";
//       width: 100%;
//       position: absolute;
//       left: 0;
//       right: 0;
//       border: 20px solid transparent;
//       top: 100%;
//       border-top-color: inherit;
//       z-index: 4;
//     }
//   }
//   &-5{
//     position: absolute;
//     margin-left: 13px;
//     margin-top: 10px;

//     width: 92%;
//     &:before {
//       display: block;
//       content: "";
//       width: 100%;
//       position: absolute;
//       left: 0;
//       right: 0;
//       border: 20px solid transparent;
//       bottom: 100%;
//       border-bottom-color: inherit;
//     }
//     &:after {
//       display: block;
//       content: "";
//       width: 100%;
//       position: absolute;
//       left: 0;
//       right: 0;
//       border: 20px solid transparent;
//       top: 100%;
//       border-top-color: inherit;
//       z-index: 5;
//     }
//   }
// }
// .octagon-color {
//   background-color: #f4a460;
//   border-color: #f4a460;
//   &-2 {
//     background-color: #8b4513 ;
//     border-color: #8b4513;
//   }
//   &-3 {
//     background-color: #f4a460;
//     border-color: #f4a460;
//   }
//   &-4 {
//     background-color: #ffffff;
//     border-color: #ffffff;
//   }
//   &-5 {
//     background-color: #f5f5f5;
//     border-color: #f5f5f5;
//   }
// }
// .octagon:before, .octagon:after {
//   display: block;
//   content: "";
//   position: absolute;
//   left: 0;
//   right: 0;
//   border: 20px solid transparent;
// }
// .octagon:before {
//   bottom: 100%;
//   border-bottom-color: inherit;
// }
// .octagon:after {
//   top: 100%;
//   border-top-color: inherit;
// }
</style>
