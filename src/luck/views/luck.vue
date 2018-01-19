<template>
   <div class="page-wrap">
       <div class="main-wrap">
            <mu-appbar title="migic">
                <mu-icon-button icon="navigate_before" slot="left" class="back"/>
                <mu-icon-menu icon="more_vert" slot="right">
                    <mu-menu-item title="菜单 1"/>
                    <mu-menu-item title="菜单 2"/>
                    <mu-menu-item title="菜单 3"/>
                    <mu-menu-item title="菜单 4"/>
                    <mu-menu-item title="菜单 5"/>
                </mu-icon-menu>
            </mu-appbar>
            <mu-raised-button label="跳转" class="demo-raised-button" primary @click="go"/>
            <h4 @click="scrollPosition" class="photo" v-clamp="2">
                {{date | fromNow}}
                上课大富科技速度快哈利的撒是否发士大夫反倒是富士达电风扇发的啊打发大夫反倒是富士达电风扇发的啊打
            </h4>
            <div class="test"></div>
            <div class="out-wrap">
                <yd-lightbox
                    class="list-wrap"
                    :style="{'width': list.length * 158 + 'px'}">
                    <yd-lightbox-img
                        v-for="item, key in list.list"
                        :key="key"
                        :src="item.src"
                        class="item-wrap">
                    </yd-lightbox-img>
                </yd-lightbox>
            </div>
            <div class="test">
                <yd-lightbox>
                    <yd-lightbox-img v-for="item, key in list.imgs" :key="key" :src="item.src"></yd-lightbox-img>
                </yd-lightbox>
            </div>
        </div>
   </div>
</template>
<script>
import BScroll from 'better-scroll';
import config from 'luck/config';
import bridge from 'common/bridge';

export default {
    data() {
        return {
            list: [],
            date: new Date('2018-01-09').getTime(),
            scroll: null
        };
    },
    mounted() {
        new BScroll('.out-wrap', {
            scrollX: true,
            click: true
        });
        this.scroll = new BScroll('.page-wrap', {
            scrollY: true,
            click: true,
            pullUpLoad: {
                threshold: 0,
                moreTxt: 'Load more',
                noMoreTxt: 'There is no more data'
            }
        });
    },
    created() {
        this.getData();
    },
    methods: {
        scrollPosition() {
            this.scroll.scrollToElement(
                '.test',
                500,
                0,
                -70
            );
        },
        getData() {
            this.$http.get(config.apis.swiperList).then(res => {
                this.list = res;
            });
        },
        go() {
            bridge.openNewPage('router://hybridWebView?url=/magic/homepage.html#/');
        }
    }
};
</script>
<style lang="stylus" scoped>
.back
    font-size 20px
.photo
    height 48px
    color red
    font-size 20px
    background-color lightseagreen
.test
    size 100px
.out-wrap
    width 100%
    height 150px
    overflow hidden
    .list-wrap
        min-height 150px
        display flex
        .item-wrap
            margin-right 8px
</style>
