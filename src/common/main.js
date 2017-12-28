import Vue from 'vue';
import App from './App';
import 'normalize.css';
import log from 'common/utils/log';

export default function (props) {
    return new Vue({
        el: '#app',
        render(createElement) {
            return createElement('App');
        },
        components: { App },
        ...props,
        mounted() {
            console.log('App loaded, spend', +new Date() - window.appStartAt, 'ms');
        }
    });
}
