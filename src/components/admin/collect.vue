<template>
  <div class="content-s">
    <FhNav></FhNav>
    <Table :columns="columns1" :data="tableData"></Table>
  </div>
</template>
<script>
  import FhNav from "../FhNav.vue";
  export default {
    components: {
      FhNav
    },
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
</style>