<script setup lang="ts">
</script>

<template>
  <div class="footer d-flex align-center font-Shippori-Mincho-B1">
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
  height: 400px;
  background-color:#383C3C;
  color:#FFFFFF;
  .left-item{
    margin-left:230px;
    p{
      margin: 17px 0px;
      &:hover{
        cursor: pointer;
      }
    }
  }
  .rigth-item{
    margin-left:100px;
    p{
      margin: 17px 0px;
      &:hover{
        cursor: pointer;
      }
    }
  }
}
</style>
