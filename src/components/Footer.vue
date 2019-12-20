<template>
  <div class="foot-btn">
    <ul>
      <router-link class="home" to="/home" tag="li">
        <a href="javascript:;">
          <img :src="'/home' === $route.path ? switchIcon[0].selected : switchIcon[0].normal">
        </a>
      </router-link>
  
      <router-link class="write" to="/publication" tag="li">
        <a href="javascript:;"></a>
      </router-link>
  
      <router-link class="my" to="/user-info" tag="li">
        <a href="javascript:;">
          <img :src="'/user-info' === $route.path ? switchIcon[1].selected : switchIcon[1].normal">
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      switchIcon:[   //图片切换
        {normal: require('../assets/img/home1.png'), selected: require('../assets/img/home.png')},
        {normal: require('../assets/img/my1.png'), selected: require('../assets/img/my.png')},
      ]
    }
  }
}
</script>
<style scoped>
  img{
    width: 0.44rem;
    background-size: 100%;
  }
</style>