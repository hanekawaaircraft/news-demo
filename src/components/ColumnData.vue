<template>
  <div>
    <FhNav></FhNav>
    <div class="content">
      <div class="header clear">
        <p>新华社</p>
      </div>
      <div class="cont">
        <h3>{{ columnData.title }}</h3>
        <div class="time">
          <p>
            {{ columnData.time }}
            <span>
              <img src="../assets/img/zan.png" alt />
            </span>
          </p>
        </div>
        <div class="text-box" v-html="columnData.content"></div>
        <Rate disabled v-model="columnData.rate" />
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
      columnData: {}
    };
  },
  mounted() {
    this.fetchData(this.$route.params.id);

    //发送 隐藏footer的 action
    if (this.$route.path.indexOf("columndata") > 0) {
      this.$store.dispatch("hideFooter");
    }
  },
  methods: {
    fetchData(id) {
      var that = this;
      this.$http
        .get("../src/data/columndata.data")
        .then(function(res) {
          //console.log(res.data[id]);
          that.columnData = res.data[id - 1];
        })
        .catch(function(err) {
          // console.log("文章详细页面:", err);
        });
    }
  },
  watch: {
    $route(to) {
      //console.log(to);
      var reg = /columndata\/\d+/;
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
