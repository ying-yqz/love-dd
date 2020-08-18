<template>
  <div class="bg">
    <!-- <audio class="success" src="../../../public/2106448377.mp3"></audio> -->
    <audio ref='refAudio' id="audio" autoplay='autoplay' loop='loop'>
      <source src="../../../public/cart.mp3" type="audio/ogg">
      <source src="../../../public/cart.mp3" type="audio/mpeg">
    </audio>
    <div class="rect-wrap">
      <!-- //舞台元素，设置perspective，让其子元素获得透视效果。 -->
      <div class="container">
        <!-- //容器，设置transform-style: preserve-3d，让其子元素在3D空间呈现 -->
        <div class="top slide">
          <img class="size" src="../../images/1.jpg" alt />
        </div>
        <!-- //立方体的六个面 -->
        <div class="bottom slide">
          <img class="size" src="../../images/4.jpg" alt />
        </div>
        <div class="left slide">
          <img class="size" src="../../images/3.jpg" alt />
        </div>
        <div class="right slide">
          <img class="size" src="../../images/情侣.jpg" alt />
        </div>
        <div class="front slide">
          <img class="size" src="../../images/2.jpg" alt />
        </div>
        <div class="back slide">
          <img class="size" src="../../images/星空.jpg" alt />
        </div>
      </div>
    </div>

    <div class="letter" @click="tolove">
      <img src="../../images/信.png" alt />
    </div>

    <div class="tell">我想告诉你</div>

    <van-dialog v-model="yebo" class='yibo'>
      <div class='like'>我喜欢你</div>
    </van-dialog>
  </div>
</template>

<script>
import { Dialog } from 'vant';

export default {
  components: {
  //   [Card.name]: Card,
  //   [Checkbox.name]: Checkbox,
  //   [SubmitBar.name]: SubmitBar,
  //   [CheckboxGroup.name]: CheckboxGroup
    [Dialog.Component.name]: Dialog.Component
  },

  data() {
    return {
      yebo: false
    };
  },

  computed: {},

  mounted () {
    //  this.$refs.refAudio.load()
  },

  methods: {
    tolove() {
      this.yebo = true
    }
  }
};
</script>

<style lang="less">
.like {
  font-size: 32px;
  text-align: center;
  padding: 20px 0;
  color: #F95B7B;
}
.bg {
  height: 100vh;
  background-image: url("../../images/背景2.jpg");
  background-size: cover;
}
.rect-wrap {
  position: relative;
  perspective: 2000px;
}
.container {
  width: 400px;
  height: 400px;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  transform-origin: 50% 50% 100px; /* //设置3d空间的原点在平面中心再向Z轴移动200px的位置 */
  -webkit-transform-origin: 50% 50% 100px;
  /* left: 50%;
        margin-left: -200px; */
  top: 100px;
}
.size {
  width: 200px;
  height: 200px;
}
.slide {
  width: 200px;
  height: 200px;
  position: absolute;
  background: #000;
  line-height: 200px;
  text-align: center;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
}
.top {
  left: 100px;
  top: -100px;
  transform: rotateX(-90deg);
  -webkit-transform: rotateX(-90deg);
  transform-origin: bottom;
  -webkit-transform-origin: bottom;
}
.bottom {
  left: 100px;
  bottom: -100px;
  transform: rotateX(90deg);
  -webkit-transform: rotateX(90deg);
  transform-origin: top;
  -webkit-transform-origin: top;
}
.left {
  left: -100px;
  bottom: 100px;
  transform: rotateY(90deg);
  -webkit-transform: rotateY(90deg);
  transform-origin: right;
  -webkit-transform-origin: right;
}
.right {
  left: 300px;
  bottom: 100px;
  transform: rotateY(-90deg);
  -webkit-transform: rotateY(-90deg);
  transform-origin: left;
  -webkit-transform-origin: left;
}
.front {
  left: 100px;
  top: 100px;
  transform: translateZ(200px);
  -webkit-transform: translateZ(200px);
}
.back {
  left: 100px;
  top: 100px;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
}
@keyframes rotate-frame {
  // 0% {
  //   transform: rotateX(0deg) rotateY(0deg);
  // }
  // 10% {
  //   transform: rotateX(0deg) rotateY(180deg);
  // }
  // 20% {
  //   transform: rotateX(-180deg) rotateY(180deg);
  // }
  // 30% {
  //   transform: rotateX(-360deg) rotateY(180deg);
  // }
  // 40% {
  //   transform: rotateX(-360deg) rotateY(360deg);
  // }
  // 50% {
  //   transform: rotateX(-180deg) rotateY(360deg);
  // }
  // 60% {
  //   transform: rotateX(90deg) rotateY(180deg);
  // }
  // 70% {
  //   transform: rotateX(0) rotateY(180deg);
  // }
  // 80% {
  //   transform: rotateX(90deg) rotateY(90deg);
  // }
  // 90% {
  //   transform: rotateX(90deg) rotateY(0);
  // }
  // 100% {
  //   transform: rotateX(0) rotateY(0);
  // }
  0% {
    transform: rotate3D(1, 1, 1, 0deg);
    -webkit-transform: rotate3D(1, 1, 1, 0deg);
  }
  100% {
    transform: rotate3D(1, 1, 1, 360deg);
    -webkit-transform: rotate3D(1, 1, 1, 360deg);
  }
}
.container {
  -webkit-animation: rotate-frame 30s linear infinite;
  animation: rotate-frame 30s linear infinite;
}

.letter {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 40px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: myletter 3s infinite linear;
  -webkit-animation: myletter 3s infinite linear;
}
@keyframes myletter {
  0% {
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
  }
  50% {
    transform: rotate(-20deg);
    -webkit-transform: rotate(-20deg);
  }
  100% {
    transform: rotate(20deg);
    -webkit-transform: rotate(20deg);
  }
}

.tell {
  text-align: center;
  margin-top: 18px;
  font-size: 18px;
  letter-spacing: 2px;
  color: #56b5ea;
  font-family: STKaiti;
}
</style>
