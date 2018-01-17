import Vue from 'vue';
import 'normalize.css';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-teal.css';
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

Vue.use(MuseUI);
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
