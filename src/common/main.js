import Vue from 'vue';
import App from './App';
import 'normalize.css';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';
import log from 'common/utils/log';
import 'common/assets/css/ydui.styl';

Vue.use(YDUI);

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
