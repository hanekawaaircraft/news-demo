<template>
  <div class="content-s">
    <FhNav></FhNav>
    <p>粉丝列表</p>
    <Card v-for="(item, index) in fansList" :key="index">
      <div>
        <img src='../../assets/img/weixin1.png' class="ava"/>
        <h2 :class="item.userstatus == 1 ? 'huiyuan' : ''">{{item.uid}}</h2>
        <h4 :class="item.userstatus == 1 ? 'huiyuan' : ''">{{item.time}}</h4>
      </div>
    </Card>
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
      fansList: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("../../src/data/fans.data").then((res)=> {
        this.fansList = res.data;
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
  .ava{
    float:right;
    width: 40px;
  }
  .huiyuan{
    color:#f60
  }
</style>
