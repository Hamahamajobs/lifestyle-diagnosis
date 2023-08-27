<script setup lang="ts"></script>

<template>
  <div class="footer d-flex align-center font-Zen-Kaku-Gothic-New">
    <div class="left-item">
      <p>トップページ</p>
      <p>生き方を診断する</p>
      <p>13タイプ一覧</p>
      <p>お問い合わせ</p>
    </div>
    <div class="rigth-item">
      <p>運営会社</p>
      <p>プライバシーポリシー</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 500px;
  background-color: #383c3c;
  color: #fff;
  display: flex;
  align-items: center;
  @include sp {
    height: 500px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .left-item {
    margin-left: 230px;
    @include sp {
      width: 245px;
      margin-left: 0;
    }
    p {
      margin: 17px 0;
      @include sp {
        margin-left: 0;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
  .rigth-item {
    margin-left: 100px;
    @include sp {
      width: 245px;
      margin-left: 0;
    }
    p {
      margin: 17px 0;
      @include sp {
        margin-left: 0;
      }
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
