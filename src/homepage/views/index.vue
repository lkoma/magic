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
        <div>你哈</div>
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
    }
};
</script>
<style lang="stylus" scoped>
</style>
