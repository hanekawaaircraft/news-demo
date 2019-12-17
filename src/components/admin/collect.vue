<template>
  <div class="content-s">
    <div class="fh-nav">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="time"
        label="日期"
        width="110">
      </el-table-column>
      <el-table-column
        prop="title"
        label="新闻"
        width="180">
      </el-table-column>
      <el-table-column
        prop="news"
        label="报社">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: []
      }
    },
    mounted(){
      this.getData()
    },
    methods:{
      getData(){
        var that=this;
        this.$http.get('../../src/data/follow.data')
        .then((res)=>{
          // console.log(res.data);
          that.tableData=res.data;
        })
      }
    }
  }
</script>
<style scoped>
  .content-s{
    margin-top:50px;
    padding-right: 10px;
    padding-bottom: 60px;
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