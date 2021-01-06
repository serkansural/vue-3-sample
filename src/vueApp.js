import * as Vue from 'Vue';
import * as VueRouter from 'VueRouter';
import App from './app.vue';
import Dashboard from './components/dashboard.vue';


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [{
        path: "/test",
        component: Dashboard,
    }, ],
});

const app = Vue.createApp(App).use(router).mount('#vueApp');