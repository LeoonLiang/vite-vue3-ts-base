import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/common.less'
import Router from '@/router/index'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(Router)
app.use(createPinia())
app.mount('#app')
