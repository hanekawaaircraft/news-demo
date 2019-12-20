<template>
  <div class="content-s">
    <FhNav></FhNav>
    <p>发表文章</p>
    <Input type="textarea" :rows="10" placeholder="写点啥..." maxlength="600" @input = "InputNum" v-model="desc"></Input>
    <span class="text">您还可以输入{{remnant}}/600字</span>
    <div class="input-button">
      <Button type="primary">发布</Button>
      <Button style="margin-left: 8px">暂存</Button>
    </div>
  </div>
</template>
<script>
import FhNav from "./FhNav.vue";
export default {
  components: {
    FhNav
  },
  data() {
    return {
      desc:"",
      remnant:600,//倒计数
    }
  },
  methods: {
  //倒计数
    InputNum(){
      var txtNum = this.desc.length;
      this.remnant = 600-txtNum;
    }
  }
}
</script>
<style scpoed>
  .content-s{
    margin-top:40px;
    padding:0 10px 10px ;
  }
  .input-button{
    padding-top: 20px;
    float:right;
  }
</style>