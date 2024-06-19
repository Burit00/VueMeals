<template>
    <nav class="navigation">
        <div class="logo">
            <img v-bind:src="logo" alt="logo" class="logo_img">
            <span class="logo_text">COOK IT YOURSELF</span>
        </div>
        <ul class="links">
            <li v-for="link in links">
                <RouterLink :to="link.to" class="link" active-class="link_active">{{link.label}}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import logo from '../assets/logo.svg';
    import { RouterLink } from 'vue-router';

    type Link = {
        to: string;
        label: string;
    }

    const links: Link[] = [
        {
            to: '/',
            label: 'Home'
        },
        {
            to: '/about',
            label: 'About'
        },
    ];
</script>

<style scoped>
    .navigation {
        width: 100%;
        padding: 1rem 2rem;
        top: 0;
        position: sticky;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--c-accent-dark);
        border-bottom: 1px solid var(--color-border);
        box-shadow: 0 1px 5px 1px var(--color-border);
    }

    .links {
        display: flex;
        gap: 2rem;
        list-style: none;
    }

    .link {
        padding: 0.5rem 1rem;
        color: var(--c-white);
        text-decoration: underline;
    }

    .link_active {
        text-decoration: none;
        color: var(--c-accent);
        background-color: var(--c-brand);
        border-radius: 5px;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 1rem;
        user-select: none;
    }

    .logo_img {
        height: 100%;
    }

    .logo_text {
        font-size: 1.8rem;
        color: var(--color-heading);
    }
</style>