<template>
  <div class="content-s">
    <FhNav></FhNav>
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
import FhNav from "../FhNav.vue";
export default {
  components: {
    FhNav
  },
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
</style>