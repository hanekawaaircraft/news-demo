<template>
  <div class="content-s">
    <div class="fh-nav">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>
    <Table :columns="columns1" :data="tableData"></Table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
         columns1: [
          {
            title: '时间',
            key: 'time',
             width:'85',
             sortable: true
          },
          {
            title: '标题',
            key: 'title',
            
          },
          {
            title: '评分',
            key: 'rate',
            width:'70'
          }
        ],
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
    margin-top:40px;
    margin-bottom: 50px
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
  .fh-nav ul {
    width: 6.4rem;
    height: 0.55rem;
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