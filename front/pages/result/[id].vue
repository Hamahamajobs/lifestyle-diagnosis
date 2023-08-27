<script setup lang="ts">
// タイプ
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

// 水滴
import WaterDropBig from '~/assets/svg//waterdrops/big.vue'
import WaterDropSmallLeft from '~/assets/svg//waterdrops/small1.vue'
import WaterDropSmallRight from '~/assets/svg//waterdrops/small2.vue'

// Router
const router = useRouter()

function goHome (): void {
  router.push('/')
}

const { morisTypes } = reactive(getMorisTypes())

// 診断結果のタイプを取得
const resultTypeId = router.currentRoute._value.params.id
const resultType = morisTypes.find(type => type.en === resultTypeId)

// svgファイルごとに適切なWidthを設定
// const setSvgWidthPx = resultType.svgWidthPx

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
  <div>
    <div class="result-container">
      <!-- 一番上のサマリー的なところ -->
      <div class="top-container mb-5" :class="resultType.en">
        <div class="result-text d-flex justify-center">
          <div class="d-flex flex-column">
            <div class="water-drops-contaner d-flex justify-center align-end">
              <WaterDropSmallLeft class="water-drops-small" />
              <WaterDropBig class="water-drops-big" />
              <WaterDropSmallRight class="water-drops-small" />
            </div>

            <p>診断結果</p>
          </div>
        </div>
        <div class="top-main">
          <div class="left">
            <p class="font-La-Belle-Aurore top-your-type-is">
              your type is...
            </p>
            <p class="top-type font-Zen-Kaku-Gothic-New">
              {{ resultType.jp }}
            </p>
            <p class="top-title font-Zen-Kaku-Gothic-New">
              精神的に安定しており、頼られることが好き
            </p>
            <p class="pc-top-detail">
              精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。
            </p>
          </div>
          <div class="right">
            <div class="white-block">
              <div class="svg-container">
                <component :is="currentSvg(resultType.en)" class="type-image" />
              </div>
            </div>
            <!-- 重複してしまうがSPデザインのためにここに追加 描画時に重複はないようCSSで制御 -->
            <p class="sp-top-detail">
              精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。
            </p>
          </div>
        </div>
      </div>
      <!-- シェアブロック -->
      <Share />

      <!-- トリセツ情報 ブロック -->
      <!-- NOTE: indexの順番でメッセージを指定 -->
      <Message
        :type="resultType.en"
        label="feature"
        ask="あなたの、特徴は？"
        :messages="resultType.messageList[0].messageContent"
      />

      <Message
        :type="resultType.en"
        label="love"
        ask="あなたの、恋愛観は？"
        :messages="resultType.messageList[1].messageContent"
      />

      <Message
        :type="resultType.en"
        label="two-faced"
        ask="あなたの、裏の顔は？"
        :messages="resultType.messageList[2].messageContent"
      />

      <Message
        :type="resultType.en"
        label="regret"
        ask="人生最後に後悔すること"
        :messages="resultType.messageList[3].messageContent"
      />

      <Message
        :type="resultType.en"
        label="value"
        ask="あなたに大切にしてほしい価値観"
        :messages="resultType.messageList[4].messageContent"
      />

      <!-- サマリーブロック -->
      <ResultSummary :type="resultType" :svg="currentSvg(resultType.en)" />

      <!-- シェアブロック -->
      <Share />

      <!-- サービス説明 ブロック -->
      <Introduce />

      <!-- 13のタイプ一覧を見る ブロック -->
      <ThirteenTypeScroll />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.result-container {
  min-width: 1280px;
  width: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @include sp {
    min-width: 380px;
  }
  .top-container {
    width: 100%;
    min-height: 861px;
    min-height: 90%;
    .water-drops-contaner {
      .water-drops-small {
        margin-top: 40px;
        margin: 0px;
      }
      .water-drops-big {
        margin: 0px;
      }
    }
    .result-text {
      margin-top: 137px;
      font-size: 30px;
      font-weight: 700;
      line-height: 43px;
      @include sp {
        margin-top: 80px;
      }
      p {
        display: inline-block;
        text-align: center;
        width: 230px;
        top: 169px;
        left: 526px;
        color: #ffffff;
        border-top: 1.5px solid #ffffff;
        border-bottom: 1.5px solid #ffffff;
        margin-top: 8px;
      }
    }
    .top-main {
      display: flex;
      justify-content: center;
      margin-top: 143px;
      padding-bottom: 230px;
      @include sp {
        flex-direction: column;
        align-items: center;
        margin: 40px 5% 0px 5%;
        padding-bottom: 50px;
      }
      .left {
        display: flex;
        flex-direction: column;
        margin-right: 100px;
        @include sp {
          margin-right: 0;
          align-items: center;
        }
        .top-your-type-is {
          font-size: 48px;
          font-weight: 400;
          line-height: 89px;
          letter-spacing: 0em;
          color: #ffffff;
          margin-bottom: -20px;
          margin-left: -40px;
          z-index: 20;
          @include sp {
            font-size: 32px;
            line-height: 59px;
            margin-left: -8rem; // 8文字分ずらす
          }
        }
        .top-type {
          width: 212px;
          height: 93px;
          font-size: 64px;
          font-weight: 700;
          line-height: 93px;
          letter-spacing: 0.1em;
          text-align: center;
          color: #ffffff;
          background-color: #383c3c;
          @include sp {
            width: auto;
            height: 48px;
            font-size: 40px;
            font-weight: 500;
            line-height: 48px; // figmaだと約58pxであるがfigma上での親ブロックを超える大きさなのでこっちで調整
            letter-spacing: 0.15em;
          }
        }
        .top-title {
          margin-top: 40px;
          width: 395px; // NOTE: figmaは385pxだけど改行されてしまうので5px伸ばした
          font-size: 34px;
          font-weight: 700;
          line-height: 50px;
          letter-spacing: 0.03em;
          background: #ffffff;
          padding: 5px 3px;
          @include sp {
            margin-top: 25px;
            width: 240px;
            font-size: 20px;
            font-weight: 500;
            line-height: 30px;
          }
        }
        .pc-top-detail {
          margin-top: 40px;
          width: 368px;
          height: 105px;
          top: 628px;
          left: 175px;
          font-family: Yu Gothic;
          font-size: 16px;
          font-weight: 500;
          line-height: 35px;
          letter-spacing: 0em;
          text-align: left;
          color: #333333;
          @include sp {
            display: none;
          }
        }
      }
      .right {
        margin-left: 3%;
        @include sp {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 0;
        }
        .white-block {
          position: relative;
          width: 465px;
          height: 375px;
          margin-top: 50px;
          border: 1px solid #383c3c;
          background: white;
          z-index: 5;
          box-shadow: 10px 10px #9775BF;
          @include sp {
            width: 310px;
            height: 230px;
            margin-top: 25px;
          }
          .svg-container {
            position: absolute;
            top: -5px;
            width: 465px;
            height: 385px;
            @include sp {
              width: 280px;
              height: 250px;
            }
          }
        }
        .sp-top-detail {
          display: none;
          @include sp {
            padding: 0 5%; // figmaに明記がなかったので目算
            display: inline-block;
            margin-top:40px;
            font-size: 16px;
            font-weight: 500;
            line-height: 35px;
          }
        }
      }
    }
  }
}
</style>
