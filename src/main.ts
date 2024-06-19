import './assets/main.css';

import { createApp } from 'vue';

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaSearch } from "oh-vue-icons/icons/fa";

import App from './App.vue';
import router from './router';

const app = createApp(App);

addIcons(FaSearch);

app.component("v-icon", OhVueIcon);

app.use(router);

app.mount('#app');
