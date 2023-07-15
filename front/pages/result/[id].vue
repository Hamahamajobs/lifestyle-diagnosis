<script setup lang="ts">
import Test1 from '~/assets/svg/test.vue'
import Test2 from '~/assets/svg/test2.vue'
import Test3 from '~/assets/svg/test3.vue'
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
const setSvgWidthPx = resultType.svgWidthPx

// 結果別のSVGを設定
const currentSvg = computed(() => (id) => {
  switch (id) {
    case 'altruist':
      return Test1
    case 'hedonistic':
      return Test1
    case 'love':
      return Test1
    case 'moderation':
      return Test1
    case 'accepting':
      return Test1
    case 'variety':
      return Test2
    case 'hedonism':
      return Test2
    case 'cooperation':
      return Test2
    case 'acceptance-of-life':
      return Test2
    case 'self-disciplined':
      return Test3
    case 'activist':
      return Test3
    case 'meditative':
      return Test3
    case 'achievement':
      return Test3
    default:
      return ''
  }
})
</script>

<template>
  <div>
    <div class="lp-container d-flex flex-column">
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
        <div class="top-main d-flex justify-center">
          <div class="left d-flex flex-column">
            <p class="font-La-Belle-Aurore top-your-type-is">
              your type is...
            </p>
            <p class="top-type font-Shippori-Mincho-B1">
              {{ resultType.jp }}
            </p>
            <p class="top-title font-Shippori-Mincho-B1">
              精神的に安定しており、頼られることが好き
            </p>
            <p class="top-detail">
              精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。
            </p>
          </div>
          <div class="right">
            <div class="white-block">
              <div class="svg-container">
                <component :is="currentSvg(resultType.en)" class="type-image" />
              </div>
            </div>
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
      <ResultSummary :type="resultType" />

      <!-- シェアブロック -->
      <Share />

      <!-- サービス説明 ブロック -->
      <Introduce />

      <!-- 13のタイプ一覧を見る ブロック -->
      <!-- TODO: コンポーネント化 -->
      <div class="mb-5 margin-auto">
        <thirteenTypeScroll />
      </div>

      <div class="mb-5" />
      <div>
        <v-btn
          class="text-center"
          prepend-icon="mdi-glasses"
          variant="outlined"
          color="primary"
          @click="goHome"
        >
          ホームへ
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.lp-container {
  min-width: 1280px;

  .top-container {
    width: 100%;
    min-height: 861px;
    min-height: 90%;

    .water-drops-contaner {
      .water-drops-small {
        margin-top: 40px;
        margin: 0;
      }

      .water-drops-big {
        margin: 0;
      }
    }

    .result-text {
      margin-top: 137px;
      font-size: 30px;
      font-weight: 700;
      line-height: 43px;

      p {
        display: inline-block;
        text-align: center;
        width: 230px;
        top: 169px;
        left: 526px;
        color: #fff;
        border-top: 1.5px solid #fff;
        border-bottom: 1.5px solid #fff;
        margin-top: 8px;
      }
    }

    .top-main {
      margin-top: 143px;
      padding-bottom: 230px;

      .left {
        margin-right: 100px;

        .top-your-type-is {
          font-size: 48px;
          font-weight: 400;
          line-height: 89px;
          letter-spacing: 0;
          color: #fff;
          margin-bottom: -20px;
          margin-left: -40px;
          z-index: 20;
        }

        .top-type {
          width: 212px;
          height: 93px;
          top: 352px;
          left: 173px;
          font-size: 64px;
          font-weight: 700;
          line-height: 93px;
          letter-spacing: 0.1em;
          text-align: center;
          color: #fff;
          background-color: #383c3c;
        }

        .top-title {
          margin-top: 40px;
          width: 395px; // NOTE: figmaは385pxだけど改行されてしまうので5px伸ばした
          top: 488px;
          left: 175px;
          font-size: 34px;
          font-weight: 700;
          line-height: 50px;
          letter-spacing: 0.03em;
          background: #fff;
          padding: 5px 3px;
        }

        .top-detail {
          margin-top: 40px;
          width: 368px;
          height: 105px;
          top: 628px;
          left: 175px;
          font-family: "Yu Gothic";
          font-size: 16px;
          font-weight: 500;
          line-height: 35px;
          letter-spacing: 0;
          text-align: left;
          color: #333;
        }
      }

      .right {
        margin-left: 3%;

        .white-block {
          position: relative;
          width: 465px;
          height: 375px;
          margin-top: 50px;
          border: 1px solid #383c3c;
          background: white;
          z-index: 5;
          box-shadow: 10px 10px #e4d9c4;

          .svg-container {
            position: absolute;
            top:-35px;
            left:-45px;
            width: v-bind(setsvgwidthpx); // TODO: SVGごとに大きさが変わってしまうのでロジック修正
            .type-image {
            }
          }
        }
      }
    }
  }
}

.margin-auto {
  margin: 0 auto;
}
</style>
