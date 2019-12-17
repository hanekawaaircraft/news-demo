<template>
  <div class="foot-btn">
    <ul>
      <li class="say">
        <a href="javascript:;">
          <el-button type="text" @click="centerDialogVisible=true"><i></i>999+</el-button>
          <el-dialog
            title="评论"
            :modal="false"
            :modal-append-to-body="false"
            :visible.sync="centerDialogVisible"
            width="80%"
            center>
            <el-input type="textarea" placeholder="请输入您的评论"></el-input>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="centerDialogVisible=false">提交</el-button>
            </div>
          </el-dialog>
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
  data() {
    return {
      followdata: {},
      likeCount:0,
      switchLike:true,
      centerDialogVisible: false,
      id:''
    };
  },
  mounted() {
    //发送 隐藏footer的 action
    if (this.$route.path.indexOf("followdata") > 0) {
      this.$store.dispatch("hideFooter");
    }
  },
  methods: {
    switchLikePng(){ 
      this.switchLike=!this.switchLike;
    },
    likeAdd(){
      this.likeCount++;
    }
  },
  watch: {
    $route(to) {
      var reg = /followdata\/\d+/;
      if (reg.test(to.path)) {
        var folId = this.$route.params.id || 0;
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
  margin-top: -2px;
  margin-right: 5px;
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
