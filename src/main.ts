import { createApp } from 'vue';
import App from '@/App.vue';
import { createPinia } from 'pinia';
import '@/main.scss';
import { useCounterStore } from '@/store/counter';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount('#app');
