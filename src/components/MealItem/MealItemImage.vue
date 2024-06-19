<template>
    <img :src="imageUrl" 
            :alt="imageName" 
            loading="lazy" 
            class="meal_img"
    >
</template>

<script setup lang="ts">

const { imageUrl, imageName } = defineProps({
    imageName: {
        required: true,
        type: String
    },
    imageUrl: {
        required: true,
        type: String
    }
});
</script>

<style scoped>
.meal_img {
    border-radius: 1rem;
    height: 100%;
    aspect-ratio: 1;
    display: flex;
}
</style>