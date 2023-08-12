<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Slash from '~/assets/svg/atom/slash.vue'
import Kindle from '~/assets/svg/kindle/index.svg?component' // NOTE: SVGが上書きされてしまうのでこの書き方でimportする

function goKindle (): void {
  const url = 'https://www.amazon.co.jp/%E7%94%9F%E3%81%8D%E6%96%B9%E3%81%AB%E3%81%93%E3%81%A0%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%82%E3%81%AA%E3%81%9F%E3%81%B8-%E4%BA%BA%E7%94%9F%E3%81%AE%E7%B5%82%E3%81%88%E6%96%B9%E3%81%AB%E3%82%82%E3%81%93%E3%81%A0%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B%EF%BC%9F-%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%8E%E3%83%BC%E3%83%88-%E4%BA%BA%E7%94%9F%E3%81%AE%E7%B5%82%E3%81%88%E6%96%B9-%E7%94%9F%E3%81%8D%E6%96%B9-ebook/dp/B0B36VC2ZX/ref=sr_1_10?keywords=%E4%BA%BA%E7%94%9F%E3%81%AE%E7%B5%82%E3%82%8F%E3%82%8A%E6%96%B9&qid=1689237743&sprefix=%E4%BA%BA%E7%94%9F%E3%81%AE%E7%B5%82%E3%82%8F%E3%82%8A%2Caps%2C182&sr=8-10'
  window.open(url, '_blank')
}
</script>

<template>
  <div class="introduce-container">
    <div class="introduce-top">
      <div class="introduce-about">
        <p class="font-La-Belle-Aurore d-flex">
          <Slash />
          <span>about</span>
        </p>
      </div>
      <div class="introduce-title d-flex justify-space-between">
        <p class="left-item font-Zen-Kaku-Gothic-New">
          生き方診断”トリセツ”とは？
        </p>
        <div class="right-item">
          <p class="short-message">
            「本当は、私はこんな人生を送りたかったんだ。」
          </p>
          <p class="long-message">
            病気や事故など、人生いつ何があってもおかしくないから。
            ”いつか”の時、それまでの人生を後悔しないために、
            あなた自身と向き合って”今”を大切に生きませんか？
            トリセツは、自分自身と向き合うことができるよう、
            あなたが心の底で”どんな生き方をしたいと思っているのか”
            を知る無料診断サービスです。
          </p>
        </div>
      </div>
    </div>
    <div class="column-container d-flex justify-center">
      <div class="column" />
    </div>
    <div class="pre-message-container d-flex justify-center">
      <p class="pre-message font-Zen-Kaku-Gothic-New">
        <span>あなたにも、家族や親しい人にも来るその時のために、</span>
        <br>
        <span>”生き方”を大切な人とシェアしませんか？</span>
      </p>
    </div>
    <div class="kindle-container d-flex flex-column align-center">
      <!-- TODO: Figmaから正しくsvgコピーできない とりまでこれ -->
      <Kindle />
      <button class="try" @click="goKindle()">
        試し読みする
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduce-container{
  width:100%;
  background: linear-gradient(#F8F4E6, #DED2BA);
  height:1300px;
  margin-top:200px;
  .introduce-top{
    width:50%;
    margin: auto;
    margin-top: 120px;
    .introduce-about{
      font-size: 20px;
      font-weight: 400;
      line-height: 37px;
      letter-spacing: 0.03em;
      text-align: left;
      p{
        margin-bottom:13px;
        span{
          padding-top:12px;
        }
      }

    }
    .introduce-title{
      // background:blue;
      .left-item{
        font-size: 20px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0.03em;
        text-align: left;
      }
      .right-item{
        width:50%;
        font-family: Yu Gothic;
        font-size: 16px;
        font-weight: 500;
        line-height: 35px;
        letter-spacing: 0.03em;
        text-align: left;
        .short-message{
          margin-bottom:18px;
        }
      }
    }
  }
  .column-container{
    margin-top: 108px;
    .column{
      height:112px;
      border-left:1px solid #000000; /*線の設定*/
    }
  }
  .pre-message-container{
    margin-top:40px;
    .pre-message{
      width:520px;
      font-size: 20px;
      font-weight: 600;
      line-height: 45px;
      letter-spacing: 0.03em;
      text-align: left;
      // background:red;
      span{
        border-bottom: 1px solid #383C3C;
      }
    }
  }
  .kindle-container{
    margin-top:-30px;
    .try {
      font-size: 20px;
      font-weight: 700;
      line-height: 32px;
      letter-spacing: 0.03em;
      text-align: left;
      background:#383C3C;
      width: 206px;
      height: 62px;
      color:#FFFFFF;
      text-align:center;
      margin-top:-62px;
      margin-right:-600px;
    }
  }
}
</style>
