import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import {createI18n} from 'vue-i18n';
import ru from '@/lenguage/ru.json';
import uz from '@/lenguage/uz.json';
const i18n = createI18n({
    locale: 'uz',
    legacy: false,
    fallbackLocale: 'uz',
    messages: {
      ru: ru,
      uz: uz,
    }
  })

const app = createApp(App)
app.use(i18n)
app.use(createPinia())
app.use(Antd)
app.mount('#app')


