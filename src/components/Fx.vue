<template>
  <div>
    <div class="nav">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>
    <div class="newsId">需要分享的新闻id:{{id}}</div>
    <div class="fxList">
      <div>
        <i v-show="switchLike" @click="switchLikePng">
          <img src="../assets/img/QQ0.png"/>
        </i>
        <i v-show="!switchLike" @click="switchLikePng">
          <img src="../assets/img/QQ1.png"/>
        </i>
        <p>分享至QQ</p>
      </div>
      <div>
        <i v-show="switchLike" @click="switchLikePng">
          <img src="../assets/img/weixin0.png"/>
        </i>
        <i v-show="!switchLike" @click="switchLikePng">
          <img src="../assets/img/weixin1.png"/>
        </i>
        <p>分享至微信</p>
      </div>
      <div>
        <i v-show="switchLike" @click="switchLikePng">
          <img src="../assets/img/weibo0.png"/>
        </i>
        <i v-show="!switchLike" @click="switchLikePng">
          <img src="../assets/img/weibo1.png"/>
        </i>
        <p>分享至微博</p>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  data() {
    return {
      likeCount:0,
      switchLike:true,
      id:''
    };
  }, 
  mounted() {
    this.getRouterData(this.$route.params.id);
  },
  methods: {
    getRouterData() {
      this.id = this.$route.params.id
    },
    switchLikePng(){
      this.switchLike=!this.switchLike;
    },
    likeAdd(){
      this.likeCount++;
    }
  },
  watch: {
    $route: function(val) {
      this.getRouterData()
    }
    //  $route(to) {
    //   var reg = /fx\/\d+/;
    //   if (reg.test(to.path)) {
    //     var id = this.$route.params.id || 0;
    //     this.getData(id);
    //   }
    // },
  }
};
</script>
<style scoped>
html,
body {
  overflow-x: hidden;
}
.nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  /* border-bottom: 1px solid #e8eaec; */
  z-index: 99;
}
.nav ul {
  width: 6.4rem;
  height: 0.45rem;
  padding-top: 0.15rem;
  margin: 0 auto;
}
.nav ul li {
  width: 0.29rem;
  height: 0.31rem;
  background: url(../assets/img/history.png) no-repeat 0 0;
  background-size: 100%;
  margin: 0 0 0 0.38rem;
}
.newsId{
  margin-top: 70px;
  text-align: center;
}
.fxList{
  margin-top:10px;
  display: flex;
  flex-direction: row; 
  flex-wrap:nowrap;
  justify-content: space-around;
}
</style>
