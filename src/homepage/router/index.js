import Vue from 'vue';
import Router from 'vue-router';
import Homepage from 'homepage/views/index';
import Signature from 'homepage/views/signature';
import Signature2 from 'homepage/views/signature2';

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
        },
        {
            path: '/signature2',
            name: 'Signature2',
            component: Signature2
        }
    ]
});
