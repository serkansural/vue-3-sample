import * as Vue from 'Vue';
import * as VueRouter from 'VueRouter';
import App from './app.vue';
import Dashboard from './components/dashboard.vue';
import Profile from './components/profile.vue';

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [{
            path: "/",
            component: Dashboard,
        },
        {
            name: 'profile',
            path: '/profile',
            component: Profile,
            props: true,
        }
    ],
});

const app = Vue.createApp(App).use(router).mount('#vueApp');