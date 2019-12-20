<template>
  <div class="content-s">
    <FhNav></FhNav>
    <p>草稿箱</p>
    <Collapse>
      <Panel name="1">
        已保存博文
        <li v-for="(item, index) in followData" :key="index" slot="content">
          <router-link :to="'/followdata/'+item.id"> 
            <h2>*{{ item.title }}</h2>
          </router-link> 
        </li>
      </Panel>
      <Panel name="2">
        未保存草稿 
        <li v-for="(items,idx) in colList" :key="idx" slot="content">
          <router-link :to="'/columndata/'+items.id"> 
            <p>*{{items.title}}</p>
          </router-link> 
        </li>
      </Panel>
      <Panel name="3">
        未发布博文
        <p slot="content">*中国航天很争气，向世界开放赢得联合国赞誉，唯有这一国例外</p>
        <p slot="content">*新一轮冲突即将展开！以色列得寸进尺，妄图建立新的定居点</p>
      </Panel>
    </Collapse>
   
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
        followData:[],
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
        .get("../../src/data/follow.data")
        .then(function(res) {
          // console.log(res.data);
          that.followData = res.data;
        })
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
    margin-top:40px;
    /* padding:0 10px 10px ; */
  }
</style>