<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Slash from '~/assets/svg/atom/slash.vue'
import Kindlepc from '~/assets/svg/kindle/pc.vue' // NOTE: SVGが上書きされてしまうのでこの書き方でimportする
import Kindlesp from '~/assets/svg/kindle/sp.vue'

function goKindle (): void {
  const url =
    'https://www.amazon.co.jp/%E7%94%9F%E3%81%8D%E6%96%B9%E3%81%AB%E3%81%93%E3%81%A0%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%82%E3%81%AA%E3%81%9F%E3%81%B8-%E4%BA%BA%E7%94%9F%E3%81%AE%E7%B5%82%E3%81%88%E6%96%B9%E3%81%AB%E3%82%82%E3%81%93%E3%81%A0%E3%82%8F%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%BE%E3%81%9B%E3%82%93%E3%81%8B%EF%BC%9F-%E3%82%A8%E3%83%B3%E3%83%87%E3%82%A3%E3%83%B3%E3%82%B0%E3%83%8E%E3%83%BC%E3%83%88-%E4%BA%BA%E7%94%9F%E3%81%AE%E7%B5%82%E3%81%88%E6%96%B9-%E7%94%9F%E3%81%8D%E6%96%B9-ebook/dp/B0B36VC2ZX/ref=sr_1_10?keywords=%E4%BA%BA%E7%94%9F%E3%81%AE%E7%B5%82%E3%82%8F%E3%82%8A%E6%96%B9&qid=1689237743&sprefix=%E4%BA%BA%E7%94%9F%E3%81%AE%E7%B5%82%E3%82%8F%E3%82%8A%2Caps%2C182&sr=8-10'
  window.open(url, '_blank')
}
</script>

<template>
  <div class="introduce-container">
    <div class="introduce-top">
      <div class="introduce-about">
        <p class="font-Kumbh-Sans d-flex">
          <Slash />
          <span>about</span>
        </p>
      </div>
      <div class="introduce-title">
        <p class="left-item font-Zen-Kaku-Gothic-New">
          生き方診断”トリセツ”とは？
        </p>
        <div class="right-item font-Shippori-Mincho-B1">
          <p class="short-message">
            「本当は、私はこんな人生を送りたかったんだ。」
          </p>
          <p class="long-message">
            病気や事故など、人生いつ何があってもおかしくないから。
            ”いつか”の時、それまでの人生を後悔しないために、
            あなた自身と向き合って”今”を大切に生きませんか？
            <span>トリセツは、自分自身と向き合うことができるよう、あなたが心の底で”どんな生き方をしたいと思っているのか”を知る無料診断サービスです。</span>
          </p>
        </div>
      </div>
    </div>
    <div class="column-container d-flex justify-center">
      <div class="column" />
    </div>
    <div class="pre-message-container d-flex justify-center">
      <p class="pre-message font-Shippori-Mincho-B1">
        <span>あなたにも、家族や親しい人にも来るその時のために、</span>
        <br>
        <span>”生き方”を大切な人とシェアしませんか？</span>
      </p>
    </div>
    <div class="kindle-container d-flex flex-column align-center" @click="goKindle()">
      <Kindlesp class="sp-kindle" />
      <Kindlepc class="pc-kindle" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduce-container {
  width: 100%;
  background: #ead3f0;
  height: 1300px;
  margin-top: 200px;
  @include sp {
    margin-top: 70px;
    height: auto;
    padding-bottom: 10%;
  }
  .introduce-top {
    width: 50%;
    margin: auto;
    margin-top: 120px;
    @include sp {
      width: 80%;
    }
    .introduce-about {
      font-size: 20px;
      font-weight: 800;
      line-height: 25px;
      letter-spacing: 0.03em;
      text-align: left;
      p {
        margin-bottom: 13px;
        span {
          padding-top: 12px;
        }
      }
    }
    .introduce-title {
      display: flex;
      justify-content: space-between;
      @include sp {
        flex-direction: column;
      }
      .left-item {
        font-size: 20px;
        font-weight: 700;
        line-height: 29px;
        letter-spacing: 0.03em;
        @include sp {
          font-weight: 500;
          margin-top: 10px;
        }
      }
      .right-item {
        width: 50%;
        font-size: 16px;
        font-weight: 500;
        line-height: 35px;
        letter-spacing: 0.03em;
        text-align: left;
        .short-message {
          margin-bottom: 18px;
        }
        @include sp {
          width: 100%;
          margin-top: 55px;
        }
        .long-message > span {
          @include sp {
            display: inline-block;
            margin-top: 1rem;
          }
        }
      }
    }
  }
  .column-container {
    margin-top: 108px;
    @include sp {
        margin-top: 60px;
      }
    .column {
      height: 112px;
      border-left: 1px solid #000; /* 線の設定 */
      @include sp {
        height: 80px;
      }
    }
  }
  .pre-message-container {
    margin-top: 40px;
    .pre-message {
      width: 520px;
      font-size: 20px;
      font-weight: 600;
      line-height: 45px;
      letter-spacing: 0.03em;
      text-align: left;
      @include sp {
        width:80%;
        font-size: 20px;
        font-weight: 300;
        line-height: 45px;
      }
    }
  }
  .kindle-container {
    margin-top: -30px;
    &:hover{
      cursor: pointer;
    }
    @include sp {
        margin-top: 15px;
      }
    .pc-kindle {
      @include sp {
        display: none;
      }
    }
    .sp-kindle{
      display: none;
      @include sp {
        display: block;
      }
    }
  }
}
</style>
