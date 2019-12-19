<template>
  <div class="content-s">
    <div class="fh-nav">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>
    <p>公开博文</p>
    <Card v-for="(item, index) in followData" :key="index">
      <router-link :to="'/followdata/'+item.id">
        <div style="text-align:center">
          <h2>{{ item.title }}</h2>
          <h4>{{item.time}}</h4>
          <p v-html="item.news"></p>
          <Rate disabled v-model="item.rate" />
        </div>
      </router-link>
      
    </Card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      followData: []
    };
  },
  mounted() {
    //获取数据
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("../../src/data/follow.data").then((res)=> {
        this.followData = res.data;
      });
    }
  }
}
</script>
<style scoped>
.content-s{
    margin-top:40px;
    margin-bottom: 50px;
    padding:0 10px 10px ;
  }
  .fh-nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    /* border-bottom: 1px solid #e8eaec; */
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