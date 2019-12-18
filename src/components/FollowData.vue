<template>
  <div>
    <div class="nav">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>
    <div class="content">
      <div class="header clear">
        <p>{{followdata.news}}</p>
      </div>
      <div class="cont">
        <h3>{{ followdata.title }}</h3>
        <div class="time">
          <p>
            {{ followdata.time }}
            <span>
              <img src="../assets/img/zan.png" alt />
            </span>
          </p>
        </div>
        <div class="text-box" v-html="followdata.detail"></div>
      </div>
    </div>
    <footBtn></footBtn>
  </div>
</template>
<script>
import footBtn from "./footBtn.vue";

export default {
  components: {
   footBtn
  },
  data() {
    return {
      followdata: {}
    };
  },
  mounted() {
    this.fetchData(this.$route.params.id);

    //发送 隐藏footer的 action
    if (this.$route.path.indexOf("followdata") > 0) {
      this.$store.dispatch("hideFooter");
    }
  },
  methods: {
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
  },
  watch: {
    $route(to) {
      //console.log(to);
      var reg = /followdata\/\d+/;
      if (reg.test(to.path)) {
        var colId = this.$route.params.id || 0;
        this.fetchData(colId);
      }
    }
  },
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

.content {
  max-width: 6.4rem;
  margin: 0 auto;
  margin-top: 0.6rem;
  background: #fff;
  padding-bottom: 0.85rem;
}
.content .header {
  padding: 0.39rem 0.28rem 0.15rem 0.28rem;
  height: auto;
  background: none;
}
.header h2 {
  float: left;
  margin-right: 0.18rem;
}
.header p {
  float: left;
  margin-top: 0.18rem;
  font-size: 0.3rem;
}

.content .cont {
  padding: 0 0.38rem;
  color: #494d4d;
}
.cont h3 {
  font-size: 0.4rem;
  line-height: 0.6rem;
  padding-bottom: 0.25rem;
  border-bottom: 1px solid #494d4d;
}
.cont .time {
  height: 0.24rem;
  line-height: 0.24rem;
  margin: 0.26rem 0;
}
.time p {
  float: left;
  position: relative;
}
.time span {
  width: 0.33rem;
  height: 0.32rem;
  position: absolute;
  top: -0.02rem;
  right: -0.35rem;
}
.time span img {
  width: 100%;
  height: 100%;
}

.cont .text-box {
  font-size: 0.25rem;
}
.text-box p {
  line-height: 0.45rem;
  margin-bottom: 0.1rem;
}
</style>
