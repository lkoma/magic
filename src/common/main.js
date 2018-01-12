import Vue from 'vue';
import 'normalize.css';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';
import 'common/assets/css/ydui.styl';
import App from './App';
import './utils/log';
import './filters/index';
import './directives/index';
import http from './utils/http';

Vue.config.silent = true;
Vue.config.productionTip = false;
Vue.config.devtools = true;
Vue.config.performance = true;

Vue.use(YDUI);
Vue.prototype.$http = http;

export default function (props) {
    return new Vue({
        el: '#app',
        render: h => h(App),
        components: { App },
        ...props,
        mounted() {
            console.log('App loaded, spend', +new Date() - window.appStartAt, 'ms');
        }
    });
}
