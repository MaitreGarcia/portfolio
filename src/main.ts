import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { inject } from '@vercel/analytics';

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

// ImageKitId: 7gl7a1msg

app.mount('#app')


inject()
