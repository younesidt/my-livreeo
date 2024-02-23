import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import router from "./router";


const app = createApp(App)
const pinia = createPinia();
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'


app.use(router)
app.use(pinia)
app.use(Vueform, vueformConfig)
app.mount('#app')