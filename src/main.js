import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Shirts from './components/Shirts.vue';
import Shoes from './components/Shoes.vue';
import Janes from './components/Janes.vue';
import Jackets from './components/Jackets.vue'
import Dresses from './components/Dresses.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/jeans', component: Janes },
        { path: '/jackets', component: Jackets },
        { path: '/Shirts', component: Jackets },
        { path: '/Shoes', component: Jackets },
        { path: '/Dresses', component: Jackets },
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')  // Mount the app after setting up the router