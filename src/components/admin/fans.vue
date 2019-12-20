<template>
  <div class="content-s">
    <FhNav></FhNav>
    <Card v-for="(item, index) in fansList" :key="index">
      <div>
        <img src='../../assets/img/weixin1.png' class="ava"/>
        <h3 :class="item.userstatus == 1 ? 'huiyuan' : ''">{{item.uid}}</h3>
        <h5>{{item.time}}</h5>
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
