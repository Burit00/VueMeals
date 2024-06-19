<template>
    <div class="meal_macros">
        <div class="meal_fcp-macro">
            <div class="meal_macro" v-for="macro in macros">
                <span>
                    {{ macro.label }}:
                </span>
                <span>
                    {{ macro.total.toFixed() + macro.unit }}
                </span>
            </div>
        </div>
        <div class="meal_macro">
            <span>KCAL:</span>
            <span>
                {{ calories.toFixed() }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Digest } from '@/types';

let { digest, calories } = defineProps({
    digest: {
        required: true,
        type: Object as PropType<Digest[]>
    },
    calories: {
        required: true,
        type: Number
    }
});
const macros = getMacros();
function getMacros(): Digest[] {
    const availableTags = ['FAT', 'CHOCDF', 'PROCNT'];
    const macroList = digest.filter((macro) => availableTags.includes(macro.tag));

    return macroList;
}
</script>

<style scoped>
.meal_macros {
    display: flex;
    flex-direction: column;
}

.meal_fcp-macro {
    flex: 1;
    border-bottom: 2px solid var(--color-background);
}

.meal_macro {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
}

.meal_macro > span {
    display: flex;
    gap: 0.3rem;
    align-items: center;
}
</style>