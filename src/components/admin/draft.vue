<template>
  <div class="content-s">
    <div class="fh-nav">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="未发布栏目" name="1">
        <li v-for="(item, index) in articleData" :key="index">
          <h2>*{{ item.title }}</h2>
        </li>
      </el-collapse-item>
      <el-collapse-item title="未保存栏目" name="2">
        <li v-for="(items,idx) in colList" :key="idx">
          <p>*{{items.title}}</p>
        </li>
      </el-collapse-item>
      <el-collapse-item title="未发布文章" name="3">
        <div>中国航天很争气，向世界开放赢得联合国赞誉，唯有这一国例外</div>
        <div>新一轮冲突即将展开！以色列得寸进尺，妄图建立新的定居点</div>
      </el-collapse-item>
      <el-collapse-item title="未保存文章" name="4">
        <div>日本公司禁止舔手指翻文件</div>
        <div>全力备战东京奥运会！乒协主席刘国梁亲承：乒超联赛停办1年</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames:[],
        articleData:[],
        colList:[]
      };
    },
    mounted(){
      this.getData();
      this.getColData();
    },
    methods: {
      handleChange(val) {
        // console.log(val);
      },
      getData() {
      var that = this;
      this.$http
        .get("../../src/data/article.data")
        .then(function(res) {
          // console.log(res.data);
          that.articleData = res.data;
        })
        .catch(function(err) {
          console.log("文章详细页面:", err);
        });
      },
      getColData() {
      var that = this;
      this.$http.get("../../src/data/column.data")
      .then(function(res) {
        // console.log(res.data);
        that.colList = res.data;
      });
    }
    }
  }
</script>

<style scpoed>
  .content-s{
    margin-top:50px;
    padding:0 10px 10px ;
  }
  .fh-nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid #e8eaec;
    z-index: 99;
  }
  h2{
    font-size: 13px;
  }
  .fh-nav ul {
    width: 6.4rem;
    height: 0.45rem;
    padding-top: 0.15rem;
    margin: 0 auto;
  }
  .fh-nav ul li {
    width: 0.29rem;
    height: 0.31rem;
    background: url(../../assets/img/history.png) no-repeat 0 0;
    background-size: 100%;
    margin: 0 0 0 0.38rem;
  }
</style>