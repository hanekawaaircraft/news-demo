<template>
  <div class="content">
    <div class="header">
      <h2><img src="../assets/img/weixin1.png" alt="" /></h2>
      <div class="user-box">
        <router-link to="/user-login">登录</router-link>
        <router-link to="/user-reg">注册</router-link>
      </div>
      <ul class="clear">
        <router-link :to="'/fans/'">
        <li>
          <p>关注</p>
          <span>999+</span>
        </li>
        </router-link>
        <router-link :to="'/fans/'">
          <li>
            <p class="end">粉丝</p>
            <span>999+</span>
          </li>
        </router-link>
      </ul>
    </div>
    <div class="docList">
      <ul>
        <router-link :to="'/open/'">
          <li class="gk-text">
            <i></i>
            <p>公开博文</p>
            <b></b>
            <span>0</span>
          </li>
        </router-link>
        <router-link :to="'/secret/'">
          <li class="mm-text">
            <i></i>
            <p>秘密博文</p>
            <b></b>
            <span>0</span>
          </li>
        </router-link>
        <router-link :to="'/draft/'">
          <li class="cg-text">
            <i></i>
            <p>草稿箱</p>
            <b></b>
            <span>0</span>
          </li>
        </router-link>
        <router-link :to="'/collect/'">
          <li class="sc-text">
            <i></i>
            <p>收藏夹</p>
            <b></b>
            <span>0</span>
          </li>
        </router-link>
        <router-link :to="'/setting/'">
          <li class="my_cz">
            <i></i>
            <p>设置</p>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {};
</script>
<style scoped>
@import "../assets/css/mydoc.css";
</style>
