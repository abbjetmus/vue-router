// Vue appen
import { createApp } from 'vue'
import App from './App.vue'

// Vue-router 
import {createRouter, createWebHashHistory} from "vue-router";

// Sidor som vi vill kunna navigera till
import HomePage from './pages/HomePage.vue'
import AboutUsPage from './pages/AboutUsPage.vue'
import ContactUsPage from './pages/ContactUsPage.vue'

// Definerar rutt för sidorna
const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutUsPage },
  { path: '/contact', component: ContactUsPage }
]

// Skapar routern
const router = createRouter ({
    history: createWebHashHistory(),
    routes,
})

// Meddelar Vue att använda våran router
createApp(App).use(router).mount('#app')
