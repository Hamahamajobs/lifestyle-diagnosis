<script setup lang="ts">
import Test1 from '~/assets/svg/test.svg?component'
import Test2 from '~/assets/svg/test2.svg?component'
import Test3 from '~/assets/svg/test3.svg?component'
import WaterDropBig from '~/assets/svg//waterdrops/big.svg?component'
import WaterDropSmallLeft from '~/assets/svg//waterdrops/small1.svg?component'
import WaterDropSmallRight from '~/assets/svg//waterdrops/small2.svg?component'

// Router
const router = useRouter()

function goHome (): void {
  router.push('/')
}

const { morisTypes } = reactive(getMorisTypes())

const resultType = computed(() => {
  // パスパラメーター取得
  const resultTypeId = router.currentRoute._value.params.id
  return morisTypes.find(type => type.en === resultTypeId)
})

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

</script>

<template>
  <div>
    <div class="lp-container d-flex flex-column">
      <!-- 一番上のサマリー的なところ -->
      <div class="top-container mb-5" :class="resultType.en">
        <div
          class="result-text d-flex justify-center"
        >
          <div
            class="d-flex flex-column"
          >
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
            <p class="top-type">
              {{ resultType.jp }}
            </p>
            <p class="top-title">
              精神的に安定しており、頼られることが好き
            </p>
            <p class="top-detail">
              精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。
            </p>
          </div>
          <div class="right">
            <div class="under-white-block" />
            <div class="white-block" />
            <component :is="currentSvg(resultType.en)" class="type-image" />
          </div>
        </div>
      </div>
      <!-- シェアブロック -->
      <Share />

      <!-- トリセツ情報 ブロック -->
      <!-- TODO: コンポーネント化 -->
      <div class="mb-5">
        <p>あなたの、特徴は？</p>
        <p>物怖じせず、どっしり構える</p>
        <p>物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える</p>
      </div>

      <!-- サマリーブロック -->
      <!-- TODO: コンポーネント化 -->
      <div class="mb-5">
        <p>
          サマリーのブロック/p>
        </p>
      </div>

      <!-- シェアブロック -->
      <Share />

      <!-- サービス説明 ブロック -->
      <!-- TODO: コンポーネント化 -->
      <div class="mb-5">
        <p>
          サービス説明のブロック/p>
        </p>
      </div>

      <!-- 13のタイプ一覧を見る ブロック -->
      <!-- TODO: コンポーネント化 -->
      <div class="mb-5">
        <p>
          13のタイプ一覧を見るのブロック/p>
        </p>
      </div>

      <div class="mb-5">
        <p>{{ resultType.jp }}</p>
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
  .top-container{
    width: 100%;
    min-height:861px;
    min-height:90%;
    .water-drops-contaner{
      .water-drops-small{
        margin-top: 40px;
        margin:0px;
      }
      .water-drops-big{
        margin:0px;
      }
    }
    .result-text {
      margin-top:137px;
      font-size: 30px;
      font-weight: 700;
      line-height: 43px;
      p {
        display:inline-block;
        text-align:center;
        width: 230px;
        top: 169px;
        left: 526px;
        color: #FFFFFF;
        border-top: 1.5px solid #FFFFFF;
        border-bottom: 1.5px solid #FFFFFF;
        margin-top:8px;
      }
    }
    .top-main{
      margin-top:143px;
      padding-bottom: 230px;
      .left{
        margin-right: 100px;
        .top-your-type-is{
          font-size: 48px;
          font-weight: 400;
          line-height: 89px;
          letter-spacing: 0em;
          color:#FFFFFF;
          margin-bottom:-20px;
          margin-left:-40px;
          z-index:20;
        }
       .top-type{
        width: 212px;
        height: 93px;
        top: 352px;
        left: 173px;
        font-size: 64px;
        font-weight: 700;
        line-height: 93px;
        letter-spacing: 0.1em;
        text-align: center;
        color:#FFFFFF;
        background-color:#383C3C;
      }
      .top-title{
        margin-top: 40px;
        font-family: Shippori Mincho B1;
        width: 395px; // NOTE: figmaは385pxだけど改行されてしまうので5px伸ばした
        top: 488px;
        left: 175px;
        font-size: 34px;
        font-weight: 700;
        line-height: 50px;
        letter-spacing: 0.03em;
        text-align: left;
        background:#FFFFFF;
        padding:5px 3px;
      }
      .top-detail {
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
        }
      }
      .right {
          margin-left:3%;
        .under-white-block {
          position: relative;
          width: 465px;
          height: 375px;
          margin-left: 10px;
          background: #E4D9C4;
          z-index:1;
        }
        .white-block {
          position: relative;
          width: 465px;
          height: 375px;
          margin-top:-385px;
          border: 1px solid #383C3C;
          background:white;
          z-index:5;
        }
        .type-image {
          position: relative;
          margin-left:-50px;
          margin-top:-500px;
          z-index:10;
        }
      }
    }

  }
}
</style>
