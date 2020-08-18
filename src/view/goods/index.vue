<template>
  <div class="login">
    <div class='loginBlock'>
    <div class="login_box">
      <div class="login_text">
        <span>9 12 15 22 5 21</span>
      </div>
    </div>

    <div>
      <div class='bigbox'>
        <div class='block red'>9</div>
        <!-- <div class='block orange'>12</div>
        <div class='block yellow'>15</div> -->
      </div>
      <div class='bigbox'>
        <!-- <div class='block red'>9</div> -->
        <div class='block orange'>12</div>
        <div class='block yellow'>15</div>
        <div class='block green'>22</div>
        <div class='block zi'>5</div>
      </div>
      <div class='bigbox'>
        <!-- <div class='block green'>22</div>
        <div class='block zi'>5</div> -->
        <div class='block blue'>21</div>
      </div>
      
    </div>

    <div class="password">
      <van-form class="password1" @submit="onSubmit">
        <van-field v-model="password" placeholder="密码" />

        <div class="big-box" style="position:relative">
          <img class="loginbtn1" src="../../images/btn.png" alt />
          <van-button class="loginbtn" native-type="submit">确认</van-button>
        </div>
      </van-form>
    </div>
    </div>
  </div>
</template>

<script>
import { Form, Button, Field,Dialog } from "vant";

export default {
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field,
    [Dialog.name]: Dialog,
  },

  data() {
    return {
      password: ""
    };
  },

  methods: {
    onSubmit() {
      // if (this.password == "1996/05/08") {
      if (this.password == "iloveu") {
        Dialog.alert({
          message: "欢迎弟弟❤"
        }).then(() => {
          // on close
          this.$router.push('cute');
        });
      } else {
        // console.log("毁灭");
        Dialog.alert({
          message: "错误！"
        }).then(() => {
          // on close
        });
      }
    }
  }
};
</script>

<style lang="less">
.login {
  width: 100%;
  // height: calc(100vh - 20px);
  height: 100vh;
  // background-color: #f00;
  background-image: url("../../images/科技.jpg");
  // padding-top: 40px;
}
.loginBlock {
  padding-top: 40px;
}
.login_box {
  width: 100%;
  height: 200px;
  background-image: url("../../images/timg1.png");
  background-repeat: no-repeat;
  background-size: contain;
}
.login_text {
  display: flex;
  height: 200px;
  justify-content: center;
  align-items: center;
  color: #f00;
  letter-spacing: 2px;
  font-size: 25px;
  // font-family: STKaiti;
  font-family: STFangsong;
  font-weight: 600;
  opacity: 0.8;
  flex-wrap: wrap;
}
.password {
  width: 50%;
  margin: 0 auto;
  margin-top: 40px;
}
.password1 .van-cell {
  border-radius: 24px;
}
.loginbtn {
  width: 80px;
  height: 80px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.loginbtn1 {
  width: 128px;
  height: 128px;
  position: absolute;
  top: -4px;
  left: -4px;
  transform: rotate(70deg);
  animation: myfirst 6s infinite linear;
  -webkit-animation: myfirst 6s infinite linear;
}
@keyframes myfirst {
  0% {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
  25% {
    transform: rotate(720deg);
    -webkit-transform: rotate(720deg);
  }
  50% {
    transform: rotate(1080deg);
    -webkit-transform: rotate(1080deg);
  }
  100% {
    transform: rotate(1440deg);
    -webkit-transform: rotate(1440deg);
  }
}
.big-box {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  margin-top: 15px;
  line-height: 120px;
}
.bigbox {
  display: flex;
  justify-content: center;
}
.block {
  width: 50px;
  height: 50px;
  background-color: #f00;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 1px 1px 0 0;
  color: #fff;
}
.red {
  background-color: #ff0000;
}
.yellow {
  background-color: #ffff00;
}
.orange {
  background-color: #ffc000;
}
.green {
  background-color: #00b050;
}
.zi {
  background-color: #7030a0;
}
.blue {
  background-color: #0070c0;
}
</style>
