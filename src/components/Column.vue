<template>
  <div class="content mt40">
    <div class="newsList">
      <ul>
        <li v-for="(item, index) in colList" :key="index">
          <router-link :to="'/columndata/'+ item.id">
            <h2>{{ index + 1 }} . {{ item.title }}</h2>
            <p>{{ item.content }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colList: []
    };
  },
  mounted() {
    //获取数据
    this.getData();
  },
  methods: {
    getData() {
      var that = this;
      this.$http.get("src/data/column.data").then((res)=> {
        that.colList = res.data;
      });
    }
  }
};
</script>
<style scoped>
.mt40 {
  margin-top: 40px;
}
</style>
