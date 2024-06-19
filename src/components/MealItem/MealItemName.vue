<template>
    <div class="meal_head">
        <h1 class="meal_label">{{ label }}</h1>
        <div class="meal_healthLabels">
            <div v-for="healthLabel in healthLabels.slice(0, 5)" 
                 class="meal_healthLabel"
            >
                {{ healthLabel }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { label, healthLabels } = defineProps({
    label: {
        required: true,
        type: String
    },
    healthLabels: {
        required: true,
        type: Array<string>
    }
});
</script>

<style scoped>
.meal_head {
    flex: 1;
}

.meal_label {
    color: var(--color-heading);
    width: 100%;
}

.meal_healthLabels {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.4rem;
}

.meal_healthLabel {
    padding: 0.2rem 0.8rem;
    background-color: var(--color-background);
    border-radius: 2rem;
}
</style>