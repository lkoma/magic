import Vue from 'vue';
import Router from 'vue-router';
import Homepage from 'homepage/views/index';
import Signature from 'homepage/views/signature';
import Signature2 from 'homepage/views/signature2';
import Signature3 from 'homepage/views/signature3';
import Signature4 from 'homepage/views/signature4';

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
        },
        {
            path: '/signature3',
            name: 'Signature3',
            component: Signature3
        },
        {
            path: '/signature4',
            name: 'Signature4',
            component: Signature4
        }
    ]
});
