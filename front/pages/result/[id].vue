<script setup lang="ts">

function clicksend(): void {
     this.$router.push('/');
}
</script>


<template>
  <div>
    <!-- header -->
    <div>
      <v-btn fix top right><nuxt-link to="/">戻る</nuxt-link></v-btn>  
    </div>
    
    <!-- main -->
    <div>
      <p>回答結果 {{ $route.params.id }}</p>
    </div>
    
  </div>
</template>
