<template>
    <div>
        <mu-appbar title="签名2"></mu-appbar>
        <div class="sign">
            <canvas ref="canvas" class="canvas"></canvas>
        </div>
        <mu-raised-button label="保存" class="demo-raised-button" @click="save" primary/>
        <mu-raised-button label="清除" class="demo-raised-button" @click="clear" primary/>
        <div>
            <img :src="image" alt="" class="image">
        </div>
    </div>
</template>

<script>
let draw;
class Draw {
    constructor(canvas) {
        this.canvas = canvas;
        this.cxt = this.canvas.getContext('2d');
        this.stage_info = this.canvas.getBoundingClientRect();
        this.path = {
            beginX: 0,
            beginY: 0,
            endX: 0,
            endY: 0
        };
        this.drawingEvent = event => {
            this.drawing(event);
        };
    }
    init() {
        document.addEventListener('touchmove', e => {
            e.preventDefault();
        }, { passive: false });
        this.canvas.addEventListener('touchstart', e => {
            this.drawBegin(e);
        });
        this.canvas.addEventListener('touchend', () => {
            this.canvas.removeEventListener('touchmove', this.drawingEvent);
        });
        let { width, height } = window.getComputedStyle(this.canvas, null);
        width = width.replace('px', '');
        height = height.replace('px', '');
        const devicePixelRatio = window.devicePixelRatio;
        if (devicePixelRatio) {
            this.canvas.style.width = `${width}px`;
            this.canvas.style.height = `${height}px`;
            this.canvas.height = height * devicePixelRatio; // 画布宽高放大
            this.canvas.width = width * devicePixelRatio;
            this.cxt.scale(devicePixelRatio, devicePixelRatio); // 画布内容放大相同的倍数
        }
        else {
            this.canvas.width = width;
            this.canvas.height = height;
        }
        this.clear();
    }
    drawBegin(e) {
        this.cxt.lineWidth = 3;
        this.cxt.strokeStyle = '#000';
        this.cxt.shadowBlur = 1;
        this.cxt.lineJoin = 'round';
        this.cxt.lineCap = 'round';
        this.cxt.beginPath();
        this.path.beginX = e.changedTouches[0].clientX - this.stage_info.left;
        this.path.beginY = e.changedTouches[0].clientY - this.stage_info.top;
        this.cxt.moveTo(
            this.path.beginX,
            this.path.beginY
        );
        this.canvas.addEventListener('touchmove', event => {
            this.drawing(event);
        });
    }
    drawing(e) {
        const that = this;
        function drawLine() {
            that.path.endX = e.changedTouches[0].clientX - that.stage_info.left;
            that.path.endY = e.changedTouches[0].clientY - that.stage_info.top;
            that.cxt.lineTo(
                that.path.endX,
                that.path.endY
            );
            that.cxt.stroke();
        }
        const requestAnimationFrame = window.requestAnimationFrame;
        requestAnimationFrame ? requestAnimationFrame(() => {
            drawLine();
        }) : drawLine();
    }
    clear() {
        let { width, height } = this.canvas.style;
        width = width.replace('px', '');
        height = height.replace('px', '');
        this.cxt.clearRect(0, 0, width, height);
    }
    save() {
        return this.canvas.toDataURL('image/png');
    }
}

export default {
    data() {
        return {
            image: ''
        };
    },
    mounted() {
        draw = new Draw(this.$refs.canvas);
        draw.init();
    },
    methods: {
        save() {
            this.image = draw.save();
        },
        clear() {
            draw.clear();
        }
    }
};
</script>
<style lang="stylus" scoped>
.sign
    size 200px 150px
.canvas
    size 100%
    background-color #ccc
.image
    size 100%
</style>
