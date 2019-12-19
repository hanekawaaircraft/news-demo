<template>
  <div class="content">
    <Slider></Slider>
    <div class="newsList">
      <ul>
        <li v-for="(item, index) in arrList" :key="index">
          <router-link :to="'/article/' + item.id">
            <h2>{{ index + 1 }} . {{ item.title }}</h2>
            <p>{{ item.detail }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Slider from "./Slider.vue";
export default {
  data() {
    return {
      arrList: []
    };
  },
  components: {
    Slider
  },
  mounted() {
    //获取数据
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      this.$http
        .get("src/data/index.data")
        .then((res)=> {
          that.arrList = res.data;
        })
    }
  }
};
</script>
<style scoped>
@import "../assets/css/index.css";
</style>
