<script setup lang="ts">
// Router
const router = useRouter()

function goDiagnosis (): void {
  router.push('/diagnosis')
}
</script>

<template>
  <div>
    <div class="lp-container d-flex justify-center align-center flex-column">
      <!-- main -->
      <div class="mb-5">
        <p>さぁはじめましょう</p>
      </div>
      <div>
        <v-btn
          class="text-center"
          prepend-icon="mdi-arrow-up-bold-box-outline"
          variant="outlined"
          color="success"
          @click="goDiagnosis"
        >
          診断開始
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style>
.lp-container {
  height: 100vh;
}
</style>
