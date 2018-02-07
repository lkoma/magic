<template>
   <div>
       <mu-appbar title="签名"></mu-appbar>
        <mu-raised-button label="点我签名" primary @click="popup"/>
        <div>
            <img :src="image" alt="" class="img">
        </div>
        <mu-popup position="top" :overlay="true" popupClass="demo-popup-top" :open="show" @close="close">
             <mu-content-block>
                <vueSignature ref="signature" :sigOption="option" :w="'400px'" :h="'400px'"></vueSignature>
                <mu-raised-button label="保存" primary @click="save"/>
                <mu-raised-button label="清除" primary @click="clear"/>
            </mu-content-block>
        </mu-popup>
   </div>
</template>

<script>
import vueSignature from 'vue-signature';
import Vue from 'vue';

Vue.use(vueSignature);

export default {
    data() {
        return {
            show: false,
            option: {
                penColor: 'rgb(0, 0, 0)'
            },
            image: ''
        };
    },
    created() {
    },
    methods: {
        popup() {
            this.show = true;
        },
        close() {
            this.show = false;
        },
        save() {
            const png = this.$refs.signature.save();
            console.log(png);
            this.image = png;
            this.show = false;
        },
        clear() {
            this.$refs.signature.clear();
        }
    }
};
</script>
<style lang="stylus" scoped>
.img
    size 150px 150px
</style>
