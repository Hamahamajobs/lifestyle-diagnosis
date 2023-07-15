<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">

function goFacebook (): void {
  // TODO: paramで何か渡す
  const url = 'http://www.facebook.com/share.php'
  window.open(url, '_blank')
}

function goTwitter (): void {
  // TODO: paramで何か渡す
  const url = 'https://twitter.com/share'
  window.open(url, '_blank')
}

function goLine (): void {
  // TODO: paramで何か渡す
  const url = 'http://line.me/R/msg/text'
  window.open(url, '_blank')
}

function share (): void {
  // TODO: コピーしたらトースト表示
  alert('コピーしました')
}

</script>

<template>
  <div class="share-container mb-5 d-flex flex-column align-center">
    <p class="font-La-Belle-Aurore hash-tag">
      #share your life
    </p>
    <p class="font-Shippori-Mincho-B1 message">
      “あなたの生き方”を伝える
    </p>
    <div class="icon-container d-flex justify-center">
      <!-- imgタグの背景を円にするとアイコンの四角が崩れるのでdivで囲む -->
      <div class="d-flex justify-center align-center" @click="goLine()">
        <img src="@/assets/image/sns/line.png" width="32" height="32" class="icon">
      </div>
      <div class="d-flex justify-center align-center" @click="goTwitter()">
        <img src="@/assets/image/sns/twitter.png" width="32" height="32" class="icon">
      </div>
      <div class="d-flex justify-center align-center" @click="goFacebook()">
        <img src="@/assets/image/sns/facebook.png" width="32" height="32" class="icon">
      </div>
      <div class="d-flex justify-center align-center" @click="share()">
        <img src="@/assets/image/sns/link.png" width="32" height="32" class="icon">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.share-container {
  margin-top:88px;

  .hash-tag{
    font-size: 32px;
    font-weight: 400;
    line-height: 59px;
    letter-spacing: 0.03em;
    margin-bottom:12px;
  }

  .message {
    font-size: 20px;
    font-weight: 500;
    line-height: 29px;
    letter-spacing: 0.03em;
    color: #000;
  }

  .icon-container{
    margin-top:26px;

    div{
      width:66px;
      height:66px;
      border-radius: 50%;
      z-index:1;

      &:hover{
        cursor: pointer;
        background-color:#FDFBF4;
      }
    }

    .icon {
      z-index:2;
    }
  }
}
</style>
