import { createApp } from 'vue';
import App from './App.vue';
import Alert from '@/components/Alert.vue';
import './assets/main.css';

createApp(App).component('Alert', Alert).mount('#app');
