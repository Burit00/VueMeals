<script setup lang="ts">
import { ref } from 'vue';
import { searchMeals } from '@/api';
import type { MealList } from '@/types';
import SearchMeals from '@/components/SearchMeals.vue';
import MealItemList from '@/components/MealItemList.vue';

const meals = ref<MealList | null>(null);
let isLoading = ref<boolean>(false);

async function search(query: string) {
  isLoading.value = true;
  try {
    meals.value = await searchMeals(query);
  } catch(err) {
    console.log(err);
  }  
  isLoading.value = false;
}
</script>

<template>
  <div>
    <SearchMeals @search-query="search"/>
    <span v-if="isLoading">Loading...</span>
    <MealItemList v-else-if="meals?.hits.length" :meals="meals.hits"/>
    <span v-else-if="meals?.hits.length === 0">No results</span>
  </div>
</template>
