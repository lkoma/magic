import Vue from 'vue';
import Router from 'vue-router';
import Homepage from 'homepage/views/index';
import Signature from 'homepage/views/signature';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/signature',
            name: 'Signature',
            component: Signature
        }
    ]
});
