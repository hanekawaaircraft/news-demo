<template>
  <div>
    <FhNav></FhNav>
    <div class="content">
      <div class="header clear">
        <p>新闻编号:{{articleData.id}}</p>
      </div>
      <div class="cont">
        <h3>{{ articleData.title }}</h3>
        <div class="time">
          <p>
            {{ articleData.time }}
            <span>
              <img src="../assets/img/zan.png" alt />
            </span>
          </p>
        </div>
        <div class="text-box" v-html="articleData.detail"></div>
      </div>
    </div>
    <footBtn></footBtn>
  </div>
</template>
<script>
import footBtn from "./footBtn.vue";
import FhNav from "./FhNav.vue";
export default {
  components: {
    footBtn,
    FhNav
  },
  data() {
    return {
      articleData: {},
      likeCount:0,
      switchLike:true,
      commentArea: false,
      rate:0,
      id:''
    };
  },
   mounted() {
    this.getData(this.$route.params.id)
  },
  methods: {
    switchLikePng(){ 
      this.switchLike=!this.switchLike;
    },
    likeAdd(){
      this.likeCount++;
    },
    getData(id) {
      var that = this;
      this.$http
        .get("../src/data/article.data")
        .then(function(res) {
          that.articleData = res.data[id - 1];
        })
    },
    ok () {
      this.$Message.info('上传成功了！但是没用');
    },
    cancel () {
      this.$Message.info('上传失败了！但是不要紧，反正也没用');
    }
  },
  watch: {
    $route(to) {
      var reg = /article\/\d+/;
      if (reg.test(to.path)) {
        var articleId = this.$route.params.id || 0;
        this.getData(articleId);
      }
    },
  }
};
</script>
<style scoped>
html,
body {
  overflow-x: hidden;
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
