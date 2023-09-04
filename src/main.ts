import './styles/index.scss'

import { createApp } from 'vue'
import VueTheMask from 'vue-the-mask'
import App from './App.vue'

const app = createApp(App)
app.use(VueTheMask as any)
app.mount('#app')
