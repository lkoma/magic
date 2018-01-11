<template>
   <div class="page-wrap">
       <div class="main-wrap">
            <h4 @click="scrollPosition" class="photo">相册</h4>
            <div class="out-wrap">
                <yd-lightbox
                    class="list-wrap"
                    :style="{'width': list.length * 158 + 'px'}">
                    <yd-lightbox-img
                        v-for="item, key in list"
                        :key="key"
                        :src="item.src"
                        class="item-wrap">
                    </yd-lightbox-img>
                </yd-lightbox>
            </div>
            <div class="test">
                <yd-lightbox>
                    <yd-lightbox-img v-for="item, key in demoList" :key="key" :src="item.src"></yd-lightbox-img>
                </yd-lightbox>
            </div>
        </div>
   </div>
</template>
<script>
import BScroll from 'better-scroll';

export default {
    data() {
        return {
            list: [
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg' }
            ],
            demoList: [
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg' }
            ],
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
    methods: {
        scrollPosition() {
            this.scroll.scrollToElement(
                '.test',
                500,
                0,
                -70
            );
        }
    }
};
</script>
<style lang="stylus" scoped>
.photo
    height 100px
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
