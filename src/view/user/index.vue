<template>
  <div class="love_you">
    <audio id="audio" autoplay='autoplay' loop='loop'>
      <source src="../../../public/2106448377.mp3" type="audio/ogg">
      <source src="../../../public/2106448377.mp3" type="audio/mpeg">
    </audio>
    <div v-show="one" class="love_text top_text show">我想成为你的最常访问</div>
    <div v-show="two" class="love_text show">你的聊天顶置</div>
    <div v-show="three" class="love_text show">你的特别关注</div>
    <div v-show="four" class="love_text show">你的特别关心</div>
    <div v-show="five" class="love_text show">一个对你来说特别特别重要的存在</div>
    <div v-show="six" class="love_text show">我想</div>
    <div v-show="seven" class="love_text show">和你在一起</div>
    <div v-show="eigh" class="love_text girlfriend show">做我女朋友好不好</div>
    <div v-show="nine" class="check show">
      <div class="button ok"  @click="love">
        <span class="pink">❤</span>好
        <span class="pink">❤</span>
      </div>
      <div v-if="nolove" class="button no" @click='Donlove'>不好</div>
    </div>
    <div v-show="kai" class="kai" @click="open">点</div>

    <van-dialog v-model="yebo" class='yibo'>
      <!-- <img style='width: 100%' src="../../images/yebo.png"> -->
    </van-dialog>
  </div>
</template>

<script>
import { Button, Dialog } from "vant";

export default {
  components: {
    [Button.name]: Button,
    [Dialog.Component.name]: Dialog.Component
  },
  data() {
    return {
      yebo: false,
      flag: 0,
      flag1: 0,
      kai: true,
      nolove: true,
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      seven: false,
      eigh: false,
      nine: false,
    };
  },

  mounted() {
    // this.fir()
    // setTimeout(function() {
    //   this.one = !this.one;
    //   // this.twoshow = 'show'
    //   console.log(this.one);
    // }, 3000);
  },

  methods: {
    love() {
      console.log(123)
      Dialog.alert({
        message: "快来告诉我叭，爱你❤"
      }).then(() => {});
    },
    Donlove() {
      if(this.flag1 == 0){
        Dialog.alert({
          message: "小可爱一定手抖点错了，重来"
        }).then(() => {});
        this.flag1 += 1
      }else if(this.flag1 == 1){
        Dialog.alert({
          message: "我想了解更多的小可爱，再给次机会叭"
        }).then(() => {});
        this.flag1 += 1
      }else if(this.flag1 == 2){
        Dialog.alert({
          message: "听小可爱的话"
        }).then(() => {});
        this.flag1 += 1
      }else if(this.flag1 == 3){
        this.yebo = true
        this.flag1 += 1
      }else if(this.flag1 == 4){
        Dialog.alert({
          message: "只能放终极大招了！"
        }).then(() => {});
        this.flag1 = 0;
        this.nolove = false
      }
    },
    open() {
      if(this.flag == 0){
        this.one = !this.one;
        this.flag += 1
      }else if(this.flag == 1){
        this.two = !this.two;
        this.flag += 1
      }else if(this.flag == 2){
        this.three = !this.three;
        this.flag += 1
      }else if(this.flag == 3){
        this.four = !this.four;
        this.flag += 1
      }else if(this.flag == 4){
        this.five = !this.five;
        this.flag += 1
      }else if(this.flag == 5){
        this.six = !this.six;
        this.flag += 1
      }else if(this.flag == 6){
        this.seven = !this.seven;
        this.flag += 1
      }else if(this.flag == 7){
        this.eigh = !this.eigh;
        this.nine = !this.nine;
        this.kai = false
        this.flag = 0
      }
    }
  }
};
</script>

<style lang="less">
.love_you {
  height: 100vh;
  background-image: url("../../images/背景4.jpg");
  background-size: contain;
  padding-top: 130px;
}
.love_text {
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}
.girlfriend {
  font-size: 25px;
  color: #f6599b;
  margin-top: 30px;
}
.check {
  display: flex;
  justify-content: space-evenly;
  margin-top: 50px;
}
.pink {
  color: pink;
}
.button {
  width: 70px;
  height: 30px;
  // border: 1px solid #000;
  text-align: center;
  line-height: 30px;
  border-radius: 15px;
}
.ok {
  background-color: #f00;
  color: #fff;
}
.no {
  background-color: #ccc;
  color: #fff;
}
.kai {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin: 0 auto;
  margin-top: 40px;
  // position: absolute;
  // top: calc(50vh - 40px);
  // left: calc(50vw - 40px);
  background-color: #5ccbd9;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #fff;
  font-family: STKaiti;
}
.show {
  animation: myshow 3s;
  -webkit-animation: myshow 3s;
}
@keyframes myshow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.yibo {
  margin: 0 auto;
}
</style>
