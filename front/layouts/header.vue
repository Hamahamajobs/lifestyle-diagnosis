<script setup lang="ts">
const { isLoading } = loadingController()

// Router
const router = useRouter()

// SP画面でハンバーガーメニューをクリックしてメニューを閉じる
function closeMenu (): void {
  const menuToggle = document.getElementById('menu-label')
  menuToggle.click()
}
</script>

<template>
  <header>
    <div class="d-flex align-center justify-center">
      <div
        class="pc-menu-container d-flex align-center justify-center font-Zen-Kaku-Gothic-New"
      >
        <NuxtLink
          to="/"
          :class="{ 'current-page': router.currentRoute.value.path === '/' }"
        >
          トップページ
        </NuxtLink>
        <NuxtLink
          to="/diagnosis"
          :class="{ 'current-page': router.currentRoute.value.path === '/diagnosis' }"
        >
          生き方を診断する
        </NuxtLink>
        <NuxtLink to="/" class="logo">
          ロゴ作成中
        </NuxtLink>
        <NuxtLink
          to="/list"
          :class="{ 'current-page': router.currentRoute.value.path === '/list' }"
        >
          13タイプ一覧
        </NuxtLink>
        <NuxtLink to="https://instagram.com/antos_u_makoto" target="_blank">
          お問い合わせ
        </NuxtLink>
      </div>

      <!-- ハンバーガメニュー スマホのみで表示 -->
      <div class="sp-header-container d-flex align-center justify-end">
        <nav>
          <input id="menu-toggle" type="checkbox">
          <label id="menu-label" class="menu__btn" for="menu-toggle"> <span /></label>
          <ul class="menu__box">
            <li>
              <NuxtLink class="menu__item" to="/" @click="closeMenu()">
                トップページ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="menu__item" to="/diagnosis" @click="closeMenu()">
                生き方を診断する
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="menu__item" to="/list" @click="closeMenu()">
                13タイプ一覧
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                class="menu__item"
                to="https://instagram.com/antos_u_makoto"
                target="_blank"
                @click="closeMenu()"
              >
                お問い合わせ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="menu__item" to="/" @click="closeMenu()">
                運営会社
              </NuxtLink>
            </li>
            <li>
              <NuxtLink class="menu__item" to="/" @click="closeMenu()">
                プライバシーポリシー
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div>
      <v-progress-linear
        v-if="isLoading"
        class="progress-linear"
        indeterminate
        color="deep-purple-lighten-3"
        :height="5"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
// ハンバーガーメニュー用
@mixin burgerSpan {
  display: inline-block;
  position: absolute;
  width: 90%;
  height: 1px;
  background-color: #333333;
}

header {
  height: 70px; // ヘッダーの高さ固定
  width: 100%;
  background-color: #ead3f0; // TODO: 透明にする
  border-bottom: 1px solid #2d303a;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  @include sp {
    background-color: transparent;
    border-bottom: none;
  }
  .progress-linear {
    margin-top: -3px;
  }
  .pc-menu-container {
    @include sp {
      display: none !important;
    }
    a {
      padding: 25px 0;
      margin: 0 35px;
      text-decoration: none;
      max-width: 150px;
      color: #383c3c;
      font-size: 16px;
      font-weight: 700;
      line-height: 23px;
      letter-spacing: 0.05em;
      z-index: 999;
      &:hover {
        text-decoration: underline;
        text-decoration-color: #31365e;
      }
      &:focus {
        // NuxtLinkで画面遷移後にフォーカスが当たり透明度が変わってしまうので見た目が変わらないように上書き
        opacity: 1 !important;
      }
      @include tab {
        font-size: 10px;
      }
      &.logo {
        width: 140px;
        height: 39px;
        background: #333;
        text-align: center;
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #fff;
        padding-top: 5px;
      }
      &.current-page {
        text-decoration: underline;
        text-decoration-color: #31365e;
      }
    }
  }
  .sp-header-container {
    display: none; // SP画面以外では非表示
    @include sp {
      display: inline-block;
      width: 100%;
      height: 40px;
      margin-top: 20px;
    }
    nav {
      display: none;
      @include sp {
        display: flex;
        align-items: center;
        width: 40px;
        height: 40px;
        margin-right: 15px;
      }
    }
    .menu__box {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      margin: -900px 0 0;
      padding: 50px 0;
      background-color: #ffffff;
      visibility: hidden;
      z-index: 1;
    }
    .menu__item {
      flex-direction: column;
      font-weight: 400;
      text-decoration: none;
      text-transform: uppercase;
      display: block;
      padding: 12px 24px;
      color: #7e5da4;
      font-size: 18px;
      transition-duration: 0.5s;
      font-size: 16px;
      font-weight: 700;
      line-height: 23px;
      letter-spacing: 0.05em;
      &:hover {
        background-color: #4f5464;
      }
    }
    #menu-toggle {
      opacity: 0.5;
      display: none;
      &:checked ~ .menu__btn > span {
        transform: rotate(45deg);
      }
      &:checked ~ .menu__btn > span::before {
        top: 0;
        transform: rotate(0);
        background: #333333;
      }
      &:checked ~ .menu__btn > span::after {
        top: 0;
        transform: rotate(90deg);
        background: #333333;
      }
      &:checked ~ .menu__box {
        visibility: visible;
        animation: open-menu-box 0.7s ease 0s 1 normal forwards;
        @keyframes open-menu-box {
          0% {
            left: 0;
            margin: 0;
            opacity: 0;
          }
          100% {
            left: 0;
            margin: 0;
            opacity: 1;
          }
        }
      }
    }
    .menu__btn {
      transition-duration: 0.25s;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      position: relative;
      bottom: 2px;
      cursor: pointer;
      z-index: 2;
      background: #fff;
      width: 43px;
      height: 43px;
      border-radius: 50%;
      padding: 7px;
      span {
        display: inline-block;
        position: absolute;
        width: 25px;
        height: 1px;
        background-color: #333333;
        &::before {
          content: "";
          display: inline-block;
          position: absolute;
          width: 25px;
          height: 1px;
          background-color: #333333;
          top: -9px;
          transition-duration: 0.25s;
        }
        &::after {
          display: inline-block;
          position: absolute;
          width: 25px;
          height: 1px;
          background-color: #333333;
          content: "";
          top: 9px;
          transition-duration: 0.25s;
        }
      }
    }
  }
}

// /*----------------------------
// * メニュー本体
// *----------------------------*/
// .menu{
//   position: fixed;
//   top: 0;
//   right: 0;
//   z-index: 1;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background: #555;
// }
// .menu__item{
//   width: 100%;
//   height: auto;
//   padding: .5em 1em;
//   text-align: center;
//   color: #fff;
//   box-sizing: border-box;
// }

// /*----------------------------
// * アニメーション部分
// *----------------------------*/

// /* アニメーション前のメニューの状態 */
// .menu{
//   pointer-events: none;
//   opacity: 0;
//   transition: opacity .3s linear;
// }
// /* アニメーション後のメニューの状態 */
// .menu.is-active{
//   pointer-events: auto;
//   opacity: 1;
// }
</style>
