<script setup lang="ts"></script>

<template>
  <header>
    <div class="header-contents">
      <div class="pc-menu-container d-flex align-center justify-center font-Shippori-Mincho-B1">
        <NuxtLink to="/">
          トップページ
        </NuxtLink>
        <NuxtLink to="/diagnosis">
          生き方を診断する
        </NuxtLink>
        <NuxtLink to="/" class="logo">
          ロゴ作成中
        </NuxtLink>
        <NuxtLink to="/list">
          13タイプ一覧
        </NuxtLink>
        <NuxtLink to="/">
          お問い合わせ
        </NuxtLink>
      </div>

      <!-- ハンバーガメニュー スマホのみで表示 -->
      <nav>
        <input id="menu__toggle" type="checkbox">
        <label class="menu__btn" for="menu__toggle">
          <span />
        </label>
        <ul class="menu__box">
          <li>
            <a class="menu__item" href="#"><span class="red">Home</span></a>
          </li>
          <li><a class="menu__item" href="#">Services</a></li>
          <li><a class="menu__item" href="#">Portfolio</a></li>
          <li><a class="menu__item" href="#">About</a></li>
          <li><a class="menu__item" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@mixin burgerSpan {
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: #fff;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px; // ヘッダーの高さ固定
  width:100%;
  background: rgb(255 255 255 / 100%);
  border-bottom: 1px solid #2d303a;
  position:fixed;
  top:0;
  left:0;
  z-index:999;
}

.header-contents {
  margin: 0 auto;
  display: flex;

  .pc-menu-container {
    a {
      margin: 0 35px;
      text-decoration: none;
      width:150px;
      color: #383c3c;
      font-size: 16px;
      font-weight: 700;
      line-height: 23px;
      letter-spacing: 0.05em;
      z-index: 999;

      &.logo {
        width: 140px;
        height:39px;
        background: #333;
        text-align: center;
        font-family: "Yu Gothic";
        font-size: 16px;
        font-weight: 700;
        line-height: 26px;
        letter-spacing: 0.05em;
        color: #fff;
        padding-top:5px;
      }
    }
  }
}

nav {
  display: none; // PC画面でハンバーガーメニューは非表示
  align-items: center;
}

.menu__box {
  display: flex;
  list-style-type: none;
  flex-direction: column;
  position: fixed;
  visibility: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 15em;
  margin: -600px 0 0;
  padding: 0.6em 0;
  text-align: center;
  background-color: #2d303a;
  box-shadow: 1px 0 6px rgb(0 0 0 / 20%);
  z-index: 1;
  transition-duration: 0.5s;
}

.menu__item {
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  padding: 12px 24px;
  color: red;
  font-size: 18px;
  transition-duration: 0.5s;

  &:hover {
    background-color: #4f5464;
  }
}

#menu__toggle {
  opacity: 0;
  display: none;

  &:checked ~ .menu__btn > span {
    transform: rotate(45deg);
  }

  &:checked ~ .menu__btn > span::before {
    top: 0;
    transform: rotate(0);
    background: #f06c64;
  }

  &:checked ~ .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
    background: #f06c64;
  }

  &:checked ~ .menu__box {
    visibility: visible;
    left: 0;
    margin: 0;
  }
}

.menu__btn {
  transition-duration: 0.25s;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  bottom: 2px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 2;

  span {
    @include burgerSpan;

    &::before {
      @include burgerSpan;

      content: "";
      top: -8px;
      transition-duration: 0.25s;
    }

    &::after {
      @include burgerSpan;

      content: "";
      top: 8px;
      transition-duration: 0.25s;
    }
  }
}

@media screen and (width <= 700px) {
  nav {
    display: flex; // スマホ画面でハンバーガーメニューを表示
  }
}
</style>
