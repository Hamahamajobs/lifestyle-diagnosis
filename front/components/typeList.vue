<script setup lang="ts">

</script>

<template>
  <div>
    <div class="d-flex type-container">
      <div v-for="n in 13" :key="n">
        <div class="type-item">
          hoggehoge
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .type {
    &-container {
      width: 80vw;
      overflow: hidden;
    }
    &-item {
      width: 400px;
    }
  }
</style>
