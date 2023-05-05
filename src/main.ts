import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

import SubTitle from './components/SubTitle.vue'
import SubHeader from './components/SubHeader.vue'

const app = createApp(App)


app.component('SubTitle', SubTitle)
app.component('SubHeader', SubHeader)

app.use(createPinia())
app.use(router)

app.mount('#app')
