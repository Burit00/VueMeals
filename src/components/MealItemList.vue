<template>
    <div class="meals">
        <MealItem v-for="meal in meals" :meal="meal"/>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Meal } from '@/types';
import MealItem from './MealItem/MealItem.vue';

const { meals } = defineProps({
    meals: {
        required: true,
        type: Object as PropType<Meal[]>
    }
});
</script>

<style scoped>
    .meals {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>