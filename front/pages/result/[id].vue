<script setup lang="ts">
// Router
const router = useRouter()

function goHome (): void {
  router.push('/')
}

const { morisTypes } = reactive(getMorisTypes())

const resultType = computed(() => {
  // パスパラメーター取得
  const resultTypeId = router.currentRoute._value.params.id // TODO これであってんの?
  return morisTypes.find(type => type.en === resultTypeId)
})

</script>

<template>
  <div>
    <div class="lp-container d-flex justify-center align-center flex-column">
      <!-- main -->
      <div class="mb-5">
        <p>あなたの診断結果</p>
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
  height: 100vh;
}
</style>
