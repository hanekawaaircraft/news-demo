<template>
  <div class="content">
      <FhNav></FhNav>
      <div class="login-box">
      <p class="lsolid"></p>
      <div class="login">
        <p>重 设 密 码</p>
      </div>
      <p class="rsolid"></p>
    </div>
    <ul>
      <li class="lifirst">
        <input type="text" value="" />
        <p v-show="show" @click="settime()">获取验证码</p>
        <p v-show="!show" >{{count}}秒重新获取</p>
        <span>邮箱</span>
      </li>
      <li class="lifirst">
        <input type="text" value="" />
        <span>验证码</span>
      </li>
      <li class="lifirst">
        <input type="text" value="" />
        <span>新密码</span>
      </li>
    </ul>
    <div class="footbox">
      <input type="button" value="登 录" class="login-btn" />
    </div>
  </div>
</template>
<script>
  import FhNav from "./FhNav.vue";
  export default {
  components: {
    FhNav
  },
  data(){
    return {
      show: true,
      count: '',
      timer: null
    }
  },
  methods:{
    settime(){
      const re_count = 10;
        if (!this.timer) {
          this.count = re_count;
          this.show = false;
          this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= re_count) {
            this.count--;
          } else {
            this.show = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000)
      }
    }
  }
}

</script>
<style scoped>
body {
  background: #fff;
}
.content {
  max-width: 6.4rem;
  margin: 0 auto;
}
.content h1 {
  width: 2.18rem;
  height: 1.35rem;
  background-size: 100%;
  margin: 0 auto;
  margin-top: 1.22rem;
}
.content .login {
  width: 2rem;
  height: 0.38rem;
  margin: 0 auto;
  margin-top: 0.85rem;
}
.login a,.login p{
  height: 0.38rem;
  font-size: 0.35rem;
  line-height: 0.38rem;
  color: #4c4f50;
  text-align: center;
}
.login span {
  float: left;
  height: 0.38rem;
  border-left: 1px solid #4c4f50;
}
.content .login-box {
  position: relative;
}
.content .login-box .lsolid {
  width: 1.96rem;
  height: 0.18rem;
  border-bottom: 1px solid #4c4f50;
  position: absolute;
  top: 0;
  left: 0.1rem;
}
.content .login-box .rsolid {
  width: 1.96rem;
  height: 0.18rem;
  border-bottom: 1px solid #4c4f50;
  position: absolute;
  top: 0;
  right: 0.1rem;
}
.content ul {
  width: 5.78rem;
  border: 1px solid #e5e7e8;
  background: #fff;
  margin: 0 auto;
  margin-top: 34px;
}
.content ul li {
  height: 0.95rem;
  position: relative;
}
.content ul li.lifirst {
  border-bottom: 1px solid #e5e7e8;
  position: relative;
}
.content ul li.lifirst p{
  position: absolute;
  top: 38%;
  right: 10px;
}
.content ul li input {
  padding-left: 1.24rem;
  width: 4.54rem;
  height: 100%;
  font-size: 0.4rem;
}
.content ul li span {
  width: 1.23rem;
  height: 0.49rem;
  position: absolute;
  top: 0.26rem;
  left: 0;
  border-right: 1px solid #676868;
  color: #676868;
  font-size: 0.25rem;
  line-height: 0.49rem;
  text-align: center;
}
.content .footbox {
  width: 4.65rem;
  height: 0.65rem;
  margin: 0 auto;
}
.content .login-btn {
  width: 232px;
  background: #4c4f50;
  color: #fff;
  text-align: center;
  line-height: 0.65rem;
  border-radius: 8px;
  display: block;
  font-size: 0.28rem;
  margin:0 auto;
  margin-top: 40px;
}
.content .tishi {
  width: 1.4rem;
  font-size: 0.25rem;
  margin-top: 0.28rem;
  display: block;
}
</style>
