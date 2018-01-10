/**
 * Created by zhouhua on 2017/2/3.
 */
import bus, { on, off } from 'common/event';
import Vue from 'vue';
import Mint from 'mint-ui';
import 'dom4';

Vue.use(Mint);
describe('event.js', () => {
    describe('Testing $on and $emit', () => {
        it('basic', done => {
            bus.$on('test#2', () => {
                done('shouldn\'t catch this event.');
            });
            bus.$on('test#1', ({ code }) => {
                expect(code).to.be.equal(1);
                done();
            });
            bus.$emit('test#1', { code: 1 });
        });
    });
    describe('Testing dom event binding', () => {
        it('basic', done => {
            const vm = new Vue({
                el: document.createElement('div'),
                template: '<button ref="button">click</button>'
            });
            let listening = false;
            let clock;
            function handler() {
                if (!listening) {
                    clock && clearTimeout(clock);
                    done('Event listener dis-attach failed');
                }
            }
            on(vm.$refs.button, 'click', handler);
            listening = true;
            const event = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true
            });
            vm.$refs.button.dispatchEvent(event);
            vm.$nextTick(() => {
                off(vm.$refs.button, 'click', handler);
                listening = false;
                vm.$refs.button.dispatchEvent(event);
            });
            setTimeout(() => {
                done();
            }, 200);
        });
    });
    describe('Testing build-in events', () => {
        beforeEach('setup a runtime env.', () => {
            /* eslint-disable no-new */
            new Vue({
                el: document.createElement('div'),
                template: '<p>hello world</p>'
            });
        });
        it('#loading indicator', done => {
            bus.$emit('indicatorShow');
            setTimeout(() => {
                const dom = document.querySelector('.mint-indicator');
                expect(dom).to.be.ok;
                expect(dom.hidden).to.be.falsy;
                bus.$emit('indicatorShow');
                setTimeout(() => {
                    const domAlt = document.querySelector('.mint-indicator');
                    expect(domAlt).to.be.ok;
                    expect(domAlt.hidden).to.be.ok;
                }, 800);
                done();
            }, 800);
        });
    });
});
