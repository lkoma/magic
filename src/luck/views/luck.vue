<template>
   <div class="page-wrap">
       <div class="main-wrap">
            <h4 @click="scrollPosition" class="photo" v-clamp="2">
                {{date | fromNow}}
                上课大富科技速度快哈利的撒是否发士大夫反倒是富士达电风扇发的啊打发大夫反倒是富士达电风扇发的啊打
            </h4>
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
        }
    }
};
</script>
<style lang="stylus" scoped>
.photo
    height 48px
    color red
    font-size 20px
    background-color lightseagreen
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
