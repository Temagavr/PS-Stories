import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './pages/HomePage';

Vue.use(VueRouter);

let vueRouter = new VueRouter({
    mode: 'history',
    routes:[
        { path:'/home', name: 'home', component: home, meta: { title: 'Home' }  },
    ]
});

vueRouter.beforeEach(( to, from, next) => {
    document.title = to.meta.title

    next()
});

export default vueRouter;