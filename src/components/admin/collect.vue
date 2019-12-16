<template>
  <div class="content">
    <div class="nav">
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
        tableData: [{
          time: '12-12 18:46',
          title: '上海机场回应接机：系浦东机场当班员工私自违规使用',
          news: '观察者网'
        }, {
          time: '12-14 12:57',
          title: '央视新闻入驻B站，继搞学习之后年轻人爱在B站看新闻',
          news: '央视网'
        }, {
          time: '12-16 08:49',
          title: '冰花男孩父亲回应申贫困户被拒：非炒作 要养活五口人确实比较难',
          news: '环京津网'
        }, {
          time: '11-25 07:56',
          title: '全国道路客运电子客票开始试运行 将实现无纸化购票、乘车',
          news: '新京报'
        }]
      }
    }
  }
</script>
<style scoped>
  .content{
    margin-top:50px;
    padding-right: 10px;
    padding-bottom: 10px;
  }
  .nav {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    border-bottom: 1px solid #e8eaec;
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
    background: url(../../assets/img/history.png) no-repeat 0 0;
    background-size: 100%;
    margin: 0 0 0 0.38rem;
  }
</style>