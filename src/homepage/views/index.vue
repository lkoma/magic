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
        <div>你哈a a a</div>
        <yd-button size="large" type="primary">primary</yd-button>
   </div>
</template>
<script>

export default {
    data() {
        return {
            bannerList: [
                { image: 'http://static.ydcss.com/uploads/ydui/1.jpg' },
                { image: 'http://static.ydcss.com/uploads/ydui/2.jpg' },
                { image: 'http://static.ydcss.com/uploads/ydui/3.jpg' },
            ]
        }
    },
    created() {
        this.getDate();
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
