<template>
    <div>
        <mu-appbar title="签名4"></mu-appbar>
        <div class="sign">
            <canvas ref="canvas" class="canvas"></canvas>
        </div>
        <mu-raised-button label="保存" class="demo-raised-button" @click="save" primary/>
        <mu-raised-button label="清除" class="demo-raised-button" @click="clear" primary/>
        <div>
            <img :src="png" alt="" class="image">
        </div>
    </div>
</template>

<script>
import SignaturePad from 'signature_pad';

export default {
    data() {
        return {
            signaturePad: '',
            png: ''
        };
    },
    mounted() {
        const canvas = this.$refs.canvas;
        const that = this;
        this.signaturePad = new SignaturePad(canvas, {
            minWidth: 0.5,
            maxWidth: 2.0,
            throttle: 6
        });
        let { width, height } = window.getComputedStyle(canvas, null);
        width = width.replace('px', '');
        height = height.replace('px', '');
        function resizeCanvas() {
            const ratio = Math.max(window.devicePixelRatio || 1, 1);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.getContext('2d').scale(ratio, ratio);
            that.signaturePad.clear();
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
    },
    methods: {
        save() {
            this.png = this.signaturePad.toDataURL();
            console.log(this.signaturePad.toDataURL());
        },
        clear() {
            this.signaturePad.clear();
        }
    }
};
</script>
<style lang="stylus" scoped>
.sign
    size 100%
.canvas
    size 100%
    background-color #ccc
.image
    size 100%
</style>
