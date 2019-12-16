<template>
  <div class="content">
    <div class="nav">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="修改昵称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="上海" value="shanghai"></el-option>
          <el-option label="北京" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="会员" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="其他选项" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="开机自启" name="type"></el-checkbox>
          <el-checkbox label="自动捐赠" name="type"></el-checkbox>
          <el-checkbox label="我也不知道" name="type"></el-checkbox>
          <el-checkbox label="这里该写什么" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="片儿"></el-radio>
          <el-radio label="本儿"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="意见反馈" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
        
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
         rules: {
          name: [
            { required: true, message: '请输入新的昵称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择地址', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个选项', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择“资源”，建议直接交给我', trigger: 'change' }
          ],
          // desc: [
          //   { message: '这里是意见反馈', trigger: 'blur' }
          // ]
        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('提交了也没用');
          } else {
            console.log('能不能写点东西');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  };
</script>
<style scoped>
.content{
  margin-top:50px;
  padding-right: 10px;
  padding-bottom: 10px;
}
 .nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #e8eaec;
  z-index: 99;
}
.nav ul {
  width: 6.4rem;
  height: 0.45rem;
  padding-top: 0.15rem;
  margin: 0 auto;
}
.nav ul li {
  width: 0.29rem;
  height: 0.31rem;
  background: url(../assets/img/history.png) no-repeat 0 0;
  background-size: 100%;
  margin: 0 0 0 0.38rem;
}
</style>