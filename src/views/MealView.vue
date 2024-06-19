<template>
    <div>
        Meal Page
        <div>
            MealID: {{ mealId }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';

    const {mealId} = defineProps<{ mealId: string }>();

    onMounted(() => {
        console.log({mealId});
        // W tym miejscu wykonaj zapytanie HTTP do serwera
        // Link do endpointu: 'https://api.edamam.com/api/recipes/v2/{id}'
        // Dokumentacja techniczna endpointu na stronie: 
        // https://developer.edamam.com/edamam-docs-recipe-api
    });
</script>