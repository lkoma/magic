<template>
   <div>
       <yd-navbar title="NavBar">
        <router-link to="#" slot="left">
            <yd-navbar-back-icon></yd-navbar-back-icon>
        </router-link>
        </yd-navbar>
        <yd-slider autoplay="3000">
            <yd-slider-item v-for="item in bannerList" :key="item.image">
                <img :src="item.image">
            </yd-slider-item>
        </yd-slider>
        <div>{{text}}</div>
        <yd-button size="large" type="primary">primary</yd-button>
   </div>
</template>
<script>

import tail from 'lodash/tail';

export default {
    data() {
        return {
            bannerList: [
                { image: 'http://static.ydcss.com/uploads/ydui/1.jpg' },
                { image: 'http://static.ydcss.com/uploads/ydui/2.jpg' },
                { image: 'http://static.ydcss.com/uploads/ydui/3.jpg' }
            ],
            text: '你好'
        };
    },
    created() {
        this.getDate();
        console.log(tail([1, 2]));
    },
    methods: {
        getDate() {
            this.$http.get('/api/list/', {
                params: {
                    name: '张三'
                },
                silence: true
            }).then(res => {
                console.log(res);
            });
        }
    }
};
</script>
<style lang="stylus" scoped>
</style>
