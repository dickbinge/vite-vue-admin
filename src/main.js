import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import pinia from './store';
import router from './router';
import './permission';
import { registerElIcons } from '@/plugins/elicon';
import ElementPlus from 'element-plus';
import SvgIcon from '@/components/SvgIcon';

import 'virtual:svg-icons-register';

const app = createApp(App);
registerElIcons(app);
app.component('svg-icon', SvgIcon);
app.use(ElementPlus);
app.use(pinia);
app.use(router);
app.mount('#app');
