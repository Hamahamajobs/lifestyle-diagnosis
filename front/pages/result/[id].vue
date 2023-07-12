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
      <!-- 一番上のサマリー的なところ -->
      <div class="top-container mb-5">
        <div class="">
          診断結果
        </div>
        <div class="top-main d-flex">
          <div class="left d-flex flex-column">
            <p>達観型</p>
            <p>精神的に安定しており、頼られることが好き</p>
            <p>精神的に安定しており、どんなときも基本的に冷静に対応できる。そのため、周囲の人からの信頼が厚く、相談に乗ることも得意。</p>
          </div>
          <div class="right">
            画像
          </div>
        </div>
      </div>
      <!-- シェアブロック -->
      <div class="share-container mb-5">
        <p>#share your life</p>
        <p>“あなたの生き方”を伝える</p>
        <p>■ ■ ■</p>
      </div>

      <!-- トリセツ情報 ブロック -->
      <!-- TODO: コンポーネント化 -->
      <div class="share-container mb-5">
        <p>あなたの、特徴は？</p>
        <p>物怖じせず、どっしり構える</p>
        <p>物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える物怖じせずどっしり構える</p>
      </div>

      <!-- サマリーブロック -->
      <!-- TODO: コンポーネント化 -->
      <div class="mb-5">
        <p>
          サマリーのブロック/p>
        </p>
      </div>

      <!-- サービス説明 ブロック -->
      <!-- TODO: コンポーネント化 -->
      <div class="mb-5">
        <p>
          サービス説明のブロック/p>
        </p>
      </div>

      <!-- 13のタイプ一覧を見る ブロック -->
      <!-- TODO: コンポーネント化 -->
      <div class="mb-5">
        <p>
          13のタイプ一覧を見るのブロック/p>
        </p>
        <typeList></typeList>
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
