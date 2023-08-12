<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
function goDiagnosis (): void {
  router.push('/diagnosis')
}

//  ブロックの表示切り替え
const visible:boolean = ref(false)
function handleScroll (): void {
  // TODO: スクロール範囲はとりあえず200
  if (!visible.value) {
    visible.value = window.scrollY >= 200
  } else if (window.scrollY < 200) {
    visible.value = !visible.value
  }
}

// onMounted
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// onUnmounted destroyedと同義
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <transition>
    <div v-if="visible" class="footer-to-diagnosis d-flex justify-center align-center">
      <button class="start-diagnosis-btn" type="button" @click="goDiagnosis">
        <span>診断スタート！</span>
      </button>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.footer-to-diagnosis {
  width:100%;
  height: 100px;
  background: #ead3f0;
  position:fixed;
  bottom:0;
  z-index:999;
  .start-diagnosis-btn {
    position: relative;
    width: 427px;
    height: 70px;
    background: linear-gradient(270deg, #fffecf 0%, #f19a75 100%);
    box-shadow: 2px 4px 4px #41365a40, -2px 4px 4px #41365a40;
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
</style>
