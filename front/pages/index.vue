<script setup lang="ts">
import Slash from '~/assets/svg/atom/slash.vue'

// Router
const router = useRouter()

function goDiagnosis (): void {
  router.push('/diagnosis')
}

function goTypesList (): void {
  router.push('/list')
}
</script>

<template>
  <div class="lp-container">
    <div class="top">
      <div class="top-message-container d-flex justify-center flex-column align-center">
        <p class="message font-Zen-Kaku-Gothic-New">
          あなたらしい生き方を映し出す診断テスト
        </p>
        <p class="service-name font-Tsukimi-Rounded">
          みらみら
        </p>
        <button class="start-diagnosis-btn" type="button" @click="goDiagnosis">
          <span>診断スタート！</span>
        </button>
      </div>
    </div>
    <div class="introduce-container">
      <div class="introduce-top">
        <div class="introduce-about">
          <p class="font-La-Belle-Aurore d-flex align-center">
            <Slash />
            <span class="font-Kumbh-Sans">about</span>
          </p>
        </div>
        <div class="introduce-title d-flex justify-space-between">
          <p class="left-item font-Zen-Kaku-Gothic-New">
            真意を映し、<br>
            生き方を診断する。
          </p>
          <div class="right-item-container">
            <div class="right-item">
              <div class="rihgt-title d-flex">
                <p>生き方診断”みらみら”とは？</p>
                <span class="label about font-La-Belle-Aurore">about</span>
              </div>
              <p class="rihgt-message">
                <span>「本当は、私はこんな人生を送りたかったんだ。」</span><br>
                病気や事故など、人生いつ何があってもおかしくないから。
                ”いつか”の時、それまでの人生を後悔しないために、
                あなた自身と向き合って”今”を大切に生きませんか？
                トリセツは、自分自身と向き合うことができるよう、
                あなたが心の底で”どんな生き方をしたいと思っているのか”
                を知る無料診断サービスです。
              </p>
            </div>
            <div class="right-item">
              <div class="rihgt-title d-flex">
                <p>13タイプの診断結果</p>
                <span class="label types font-La-Belle-Aurore">13 types</span>
              </div>
              <p class="rihgt-message types">
                みらみらは、28問の回答結果をもとに13つのタイプに分類します。あなたに当てはまるタイプから、性格の特徴や真意と向き合うために意識すると良いことがわかります。
              </p>
              <button class="go-types-list-btn" type="button" @click="goTypesList">
                <span>13タイプを見る<span class="ml-9">→</span></span>
              </button>
            </div>
            <div class="right-item">
              <div class="rihgt-title d-flex">
                <p>科学的な根拠</p>
                <span class="label reasoning font-La-Belle-Aurore">reasoning</span>
              </div>
              <p class="rihgt-message">
                心理学者のC.W.モリスと板津さんの理論をもとに、診断システ
                ムを開発。あああああああああああああああああああああああ
                ああああああああああああああああああああ！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="last-contents d-flex justify-center">
      <div class="left-item d-flex justify-center align-center">
        <p>
          何かイラスト等の
          イメージ
        </p>
      </div>
      <div class="right-item">
        <p class="message font-Zen-Kaku-Gothic-New">
          みらみら診断で、<br>あなたの生き方を知る
        </p>
        <button class="start-diagnosis-btn" type="button" @click="goDiagnosis">
          <span>診断スタート！</span>
        </button>
      </div>
    </div>
    <!-- 診断誘導のフッター -->
    <FooterToDiagnosis />
  </div>
</template>

<style lang="scss" scoped>
.lp-container {
  .top {
    display: inline-block;
    width: 100%;
    height: 720px;
    margin-top: 70px; // ヘッダー分下にずらす
    .top-message-container {
      width: 400px;
      margin-left: 60%;
      margin-top: 200px;
      .message {
        width: 270px;
        height: 80px;
        font-size: 24px;
        font-weight: 700;
        line-height: 40px;
        letter-spacing: 0.03em;
        text-align: center;
        margin-bottom: 45px;
        color: #7e5da4;
      }
      .service-name {
        width: 348px;
        height: 40px;
        top: 386px;
        left: 722px;
        font-size: 80px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: 0.03em;
        text-align: center;
        margin-bottom: 75px;
        color: #7e5da4;
      }
      .start-diagnosis-btn {
        position: relative;
        width: 379px;
        height: 70px;
        padding: 0 30px;
        background: linear-gradient(270deg, #fffecf 0%, #f19a75 100%);
        box-shadow: 2px 4px 4px #41365A40, -2px 4px 4px #41365A40;
        color: #333;
        font-size: 16px;
        font-weight: bold;
        z-index: 1;
        transition: 0.5s;
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          background: #41365a;
          transform-origin: 100% 50%;
          transform: scaleX(0);
          transition: transform ease 0.5s;
        }
        &:hover {
          color: #fff;
        }
        &:hover::before {
          transform-origin: 0% 50%;
          transform: scaleX(1);
        }
        span {
          font-size: 24px;
          font-weight: 700;
          line-height: 38px;
          letter-spacing: 0.05em;
          text-align: left;
        }
      }
    }
  }
  .introduce-container {
    display: inline-block;
    width: 100%;
    background: linear-gradient(180deg, #f9e5da 0%, #e8bcf3 100%);
    padding-bottom: 150px;
    .introduce-top {
      width: 70%;
      max-width: 1000px;
      margin: auto;
      margin-top: 90px;
      .introduce-about {
        font-size: 20px;
        font-weight: 400;
        line-height: 37px;
        letter-spacing: 0.03em;
        text-align: left;
        p {
          margin-bottom: 13px;
          span {
            font-size: 20px;
            font-weight: 800;
            line-height: 25px;
            letter-spacing: 0.03em;
            color: #41365a;
          }
        }
      }
      .introduce-title {
        color: #41365a;
        .left-item {
          width: 400px;
          font-size: 40px;
          font-weight: 500;
          line-height: 58px;
          letter-spacing: 0.03em;
        }
        .right-item-container {
          width: 450px;
          font-size: 16px;
          font-weight: 500;
          line-height: 35px;
          letter-spacing: 0.03em;
          text-align: left;
          .right-item {
            margin-bottom: 70px;
            .rihgt-title {
              p {
                font-size: 24px;
                font-weight: 700;
                letter-spacing: 0.03em;
                position: relative;
                z-index: 10;
                white-space: nowrap;
              }
              .label {
                font-size: 70px;
                font-weight: 400;
                letter-spacing: 0.03em;
                color: rgba(252, 247, 237, 0.7);
                white-space: nowrap;
                &.about {
                  margin-left: -2rem;
                }
                &.types {
                  margin-top: 10px;
                  margin-left: -1rem;
                }
                &.reasoning {
                  margin-left: 3rem;
                }
              }
            }
            .rihgt-message {
              margin-top: 36px;
              &.types {
                margin-top: 20px;
              }
              span {
                display: inline-block;
                margin-bottom: 18px;
              }
            }
            .go-types-list-btn {
              position: relative;
              width: 226px;
              height: 50px;
              background: #ffffff;
              box-shadow: 2px 4px 4px #41365A40, -2px 4px 4px #41365A40;
              color: #606363;
              font-size: 16px;
              font-weight: bold;
              z-index: 1;
              transition: 0.5s;
              margin-top: 20px;
              &::before {
                content: "";
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                background: #41365a;
                transform-origin: 100% 50%;
                transform: scaleX(0);
                transition: transform ease 0.5s;
              }
              &:hover {
                color: #fff;
              }
              &:hover::before {
                transform-origin: 0% 50%;
                transform: scaleX(1);
              }
              span {
                font-size: 16px;
                font-weight: 700;
                line-height: 26px;
                letter-spacing: 0.05em;
              }
            }
          }
        }
      }
    }
  }
  .last-contents {
    height: 500px;
    background: rgba(66, 37, 100, 0.7);
    padding-top:76px;
    height: 355px;
    .left-item {
      width: 451px;
      height: 203px;
      background: #d9d9d9;
      margin-right: 80px;
      font-size: 24px;
      font-weight: 700;
      line-height: 38px;
      letter-spacing: 0.05em;
    }
    .right-item {
      width: 250px;
      height: 500px;
      .message {
        font-size: 24px;
        font-weight: 700;
        line-height: 45px;
        letter-spacing: 0.03em;
        color: #ffffff;
        margin-top: 10px;
        margin-bottom: 28px;
      }
      .start-diagnosis-btn {
        position: relative;
        width: 226px;
        height: 50px;
        padding: 0 30px;
        background: linear-gradient(270deg, #fffecf 0%, #f19a75 100%);
        box-shadow: 2px 4px 4px #41365A40, -2px 4px 4px #41365A40;
        color: #333;
        font-size: 16px;
        font-weight: bold;
        z-index: 1;
        transition: 0.5s;
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          background: #41365a;
          transform-origin: 100% 50%;
          transform: scaleX(0);
          transition: transform ease 0.5s;
        }
        &:hover {
          color: #fff;
        }
        &:hover::before {
          transform-origin: 0% 50%;
          transform: scaleX(1);
        }
        span {
          font-size: 16px;
          font-weight: 700;
          line-height: 26px;
          letter-spacing: 0.05em;
          text-align: left;
        }
      }
    }
  }
}
</style>
