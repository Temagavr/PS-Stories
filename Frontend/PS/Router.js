import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './pages/HomePage';
import events from './pages/EventsPage';

Vue.use(VueRouter);

let vueRouter = new VueRouter({
    mode: 'history',
    routes:[
        { path:'/home', name: 'home', component: home, meta: { title: 'Home' }  },
        { path:'/events', name: 'events', component: events, meta: { title: 'Events' }  },
    ]
});

vueRouter.beforeEach(( to, from, next) => {
    document.title = to.meta.title

    next()
});

export default vueRouter;