<template>
   <div>
        <mu-appbar title="首页"></mu-appbar>
        <vue-lazy-component>
            <ul class="album">
                <li v-for="(item, index) in album" :key="index">
                    <img :src="item.img">
                    <p class="text">{{item.title}}</p>
                </li>
            </ul>
        </vue-lazy-component>
        <mu-raised-button label="返回" class="demo-raised-button" primary @click="back"/>
        <mu-tabs :value="activeTab" @change="handleTabChange">
            <mu-tab value="tab1" icon="home"/>
            <mu-tab value="tab2" icon="flight_takeoff"/>
            <mu-tab value="tab3" icon="favorite"/>
        </mu-tabs>
   </div>
</template>

<script>
import tail from 'lodash/tail';
import config from 'homepage/config';
import bridge from 'common/bridge';

export default {
    data() {
        return {
            album: [],
            text: '你好',
            activeTab: 'tab1'
        };
    },
    created() {
        this.getDate();
        console.log(tail([1, 2]));
    },
    methods: {
        back() {
            bridge.back();
        },
        getDate() {
            this.$http.get(config.apis.albumList).then(res => {
                this.placehold = false;
                this.album = res.album;
            });
        },
        handleTabChange(val) {
            this.activeTab = val;
        }
    }
};
</script>
<style lang="stylus" scoped>
.page
    padding 56px 0 51px
    .album
        display flex
        flex-wrap wrap
        padding 8px 4px 8px 8px
        li
            width 50%
            padding-bottom 50%
            background-size cover
            position relative
            cursor pointer
            img
                size 100%
                position absolute
                top 0
                left 0
                padding 0 4px 4px 0
            .text
                height 50px
                position absolute
                bottom 4px
                left 0
                right 4px
                color #fff
                text-align center
                background-color rgba(0,0,0,.5)
    .mu-tabs
        position fixed
        left 0
        bottom 0
    .mu-appbar
        position fixed
        left 0
        top 0
</style>
