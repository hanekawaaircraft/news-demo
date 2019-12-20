<template>
  <div class="content-s">
    <FhNav></FhNav>
    <TimelineItem v-for="(item, index) in folList" :key="index">
      <router-link :to="'/followdata/'+item.id"> 
        <p class="time">{{item.time}}</p>
        <p class="content">{{item.title}}</p>
      </router-link>
    </TimelineItem>
  </div>
</template>
<script>
 import FhNav from "../FhNav.vue";
  export default {
    components: {
      FhNav
    },
  data(){
    return{
      folList:[]
    }
  },
  mounted(){
    this.getData()
  },
  methods:{
    getData(){
      this.$http.get('../../src/data/follow.data').then((res)=>{
        this.folList=res.data
      })
    }
  }
}
</script>
<style scoped>
.content-s{
    margin-top:40px;
    padding:0 10px 10px ;
  }
  
</style>   