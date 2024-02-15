import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import router from "./router";


const app = createApp(App)
const pinia = createPinia();

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

const vuetify = createVuetify({
  components,
  directives,
})

app.use(router)
app.use(pinia)
app.use(Vueform, vueformConfig)
app.use(vuetify)
app.mount('#app')