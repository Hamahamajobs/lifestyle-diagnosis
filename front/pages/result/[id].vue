<script setup lang="ts">
// Router
const router = useRouter();

function goHome(): void {
  router.push("/");
}
</script>


<template>
  <div>
    <div class="lp-container d-flex justify-center align-center flex-column">
      <div class="mb-5">
        <p>あなたの診断結果</p>
      </div>
      <div class="mb-5">
        <p>{{ $route.params.id }}</p>
      </div>
      <div class="mb-5"></div>
      <div>
        <v-btn
          class="text-center"
          prepend-icon="mdi-glasses"
          variant="outlined"
          @click="goHome"
          color="primary"
        >ホームへ</v-btn>
      </div>
    </div>
  </div>
</template>
