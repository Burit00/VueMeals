<template>
    <RouterLink :to="'/meal/' + mealId" class="meal">
            <MealItemImage :image-url="meal.recipe.image" :image-name="meal.recipe.label"/>
            <MealItemName :label="meal.recipe.label" :health-labels="meal.recipe.healthLabels" />
            <MealItemMacro :calories="meal.recipe.calories" :digest="meal.recipe.digest" />
    </RouterLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import { RouterLink } from 'vue-router';
import type { Meal } from '@/types';
import MealItemImage from './MealItemImage.vue';
import MealItemName from './MealItemName.vue';
import MealItemMacro from './MealItemMacro.vue';

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object as PropType<Meal>
    },
});

const mealId = cutPramsFromURL(meal._links.self.href);

function cutPramsFromURL(url: string): string {
    const urlIdStart = url.lastIndexOf('/') + 1;
    const urlIdEnd = url.indexOf('?');

    return url.slice(urlIdStart, urlIdEnd);
}
</script>

<style scoped>
.meal {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
    padding-right: 1.5rem;
    background-color: var(--color-background-dark);
    border-radius: 2rem;
}
</style>