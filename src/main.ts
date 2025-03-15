import '@/assets/styles/custom-bootstrap.scss';
import '@/assets/styles/global.scss'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faHome, faCog } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faHome, faCog);

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')
