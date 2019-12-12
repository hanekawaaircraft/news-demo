<template>
  <div class="foot-btn">
    <ul>
      <li class="say">
        <a href="javascript:;">
          <i></i>
          <span>999+</span>
        </a>
      </li>
      <li class="zan">
        <a href="javascript:;" @click="likeAdd">
          <i></i>
          <span>{{likeCount}}</span>
        </a>
      </li>
      <li class="xing">
        <a href="javascript:;">
          <i v-show="switchLike" @click="switchLikePng">
            <img src="../assets/img/like0.png" />
          </i>
          <i v-show="!switchLike" @click="switchLikePng">
            <img src="../assets/img/like1.png" alt />
          </i>
        </a>
      </li>
      <li class="fx">
        <router-link :to="'/fx/' + id">
          <a href="javascript:;">
            <i>
              <img src="../assets/img/fx.png"/>
            </i>
          </a>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted() {
    this.fetchData(this.$route.params.id);

    //发送 隐藏footer的 action
    if (this.$route.path.indexOf("followdata") > 0) {
      this.$store.dispatch("hideFooter");
    }
  },
  data() {
    return {
      followdata: {},
      likeCount:0,
      switchLike:true,
      id:''
    };
  },
  watch: {
    $route(to) {
      var reg = /followdata\/\d+/;
      if (reg.test(to.path)) {
        var colId = this.$route.params.id || 0;
        this.fetchData(colId);
      }
    }
  },
  methods: {
    switchLikePng(){ 
      this.switchLike=!this.switchLike;
    },
    likeAdd(){
      this.likeCount++;
    },
    fetchData(id) {
      var that = this;
      this.$http
        .get("../src/data/follow.data")
        .then(function(res) {
          that.followdata = res.data[id - 1];
        })
        .catch(function(err) {
          // console.log("文章详细页面:", err);
        });
    }
  }
};
</script>
<style scoped>
html,
body {
  overflow-x: hidden;
}
.foot-btn {
  z-index: 999;
  width: 100%;
  height: 0.8rem;
  background: #fff;
  border-top: 1px solid #e8eaec;
  position: fixed;
  left: 0;
  bottom: 0;
}
.foot-btn ul {
  width: 6.4rem;
  margin: 0 auto;
  height: 0.52rem;
  margin-top: 0.16rem;
}
.foot-btn ul li {
  float: left;
}
.foot-btn ul li a {
  width: 100%;
  height: 100%;
  display: block;
}
.foot-btn ul .say {
  width: 2.03rem;
  height: 0.52rem;
  border-right: 1px solid #e8eaec;
}
.say i {
  width: 0.36rem;
  height: 0.26rem;
  background: url(../assets/img/say.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 0.7rem;
  margin-top: 0.13rem;
}
.say span {
  height: 0.26rem;
  float: left;
  line-height: 0.26rem;
  margin-left: 0.16rem;
  margin-top: 0.13rem;
}
.foot-btn ul .zan {
  width: 1.86rem;
  height: 0.52rem;
  border-right: 1px solid #e8eaec;
}
.zan i {
  width: 0.36rem;
  height: 0.28rem;
  background: url(../assets/img/zan1.png) no-repeat 0 0;
  background-size: 100%;
  float: left;
  margin-left: 0.54rem;
  margin-top: 0.13rem;
}
.zan span {
  height: 0.26rem;
  float: left;
  line-height: 0.26rem;
  margin-left: 0.16rem;
  margin-top: 0.13rem;
}
.foot-btn ul .xing {
  width: 1.2rem;
  height: 0.52rem;
  border-right: 1px solid #e8eaec;
}
.xing i {
  width: 0.34rem;
  height: 0.24rem;
  margin: 0 auto;
  display: block;
  padding-top: 0.1rem;
}
.xing i img {
  width: 100%;
}
.foot-btn ul .fx {
  width: 1.25rem;
  height: 0.52rem;
}
.fx i {
  width: 0.33rem;
  height: 0.08rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.15rem;
}
.fx i img {
  width: 100%;
}
</style>
