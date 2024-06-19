<template>
    <section class="search">
        <form class="search_form" @submit.prevent="onSearch">
            <input  name="search-meals"
                    class="search_input" 
                    type="text" 
                    placeholder="Search meals"
                    ref="searchInput"
            />
            <button class="search_button" type="submit">
                <v-icon name="fa-search" scale="1.4"/>
            </button>
        </form>
    </section>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    const searchInput = ref<HTMLInputElement | null>(null);
    const emit = defineEmits(['searchQuery']);

    onMounted((): void => {
        searchInput.value?.focus();
    });
    
    function onSearch(): void {
        emit('searchQuery', searchInput.value?.value);
    }

</script>

<style scoped>
    .search {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    .search_form {
        width: 600px;
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 3rem;
    }

    .search_input {
        width: 100%;
        height: 100%;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        font-size: 1.5rem;
        background-color: var(--c-white);
    }

    .search_input::placeholder {
        color: var(--color-text-muted);
    }

    .search_input::-webkit-search-cancel-button {
        background-color: var(--c-brand);
        color: var(--c-brand);
    }

    .search_button {
        display: grid;
        height: 100%;
        padding: 0 2rem;
        place-items: center;
        border-radius: 5px;
        color: var(--color-background);
        background-color: var(--c-brand);
    }
</style>
