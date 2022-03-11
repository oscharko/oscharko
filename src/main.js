import { createApp } from 'vue'
import InlineSvg from 'vue-inline-svg';
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('inline-svg', InlineSvg);
app.mount('#app')
