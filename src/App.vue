<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <Navigation/>
  <div class="page">
    <RouterView/>
  </div>
</template>

<style scoped>
  .page {
    width: 100%;
    display: grid;
    grid-template-columns: 15% [content-start] 1fr [content-end] 15%;
  }
  
  .page > * {
    grid-column: content;
  }
</style>
