<template>
  <div class="content-s">
    <div class="fh-nav">
      <ul>
        <li class="l-btn" onclick="window.history.go(-1)"></li>
      </ul>
    </div>
    <Form :model="formItem" :label-width="80">
      <FormItem label="修改头像">
        <Upload action="//jsonplaceholder.typicode.com/posts/">
          <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="58"></Icon>
          </div>
        </Upload>
      </FormItem>
      <FormItem label="更改昵称">
        <Input v-model="formItem.input" placeholder="无内鬼，怎么中二怎么来。"></Input>
      </FormItem>
      <FormItem label="选择地区">
          <Select v-model="formItem.select">
            <Option value="beijing">北京</Option>
            <Option value="shanghai">上海</Option>
            <Option value="shenzhen">南昌</Option>
          </Select>
      </FormItem>
      <FormItem label="设置">
        <CheckboxGroup v-model="formItem.checkbox">
          <Checkbox label="开机自启"></Checkbox>
          <Checkbox label="双击退出"></Checkbox>
          <Checkbox label="我也不知道"></Checkbox>
          <Checkbox label="这里要写什么"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="自动续费">
        <i-switch v-model="formItem.switch" size="large">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </i-switch>
      </FormItem>
      <FormItem label="意见反馈">
        <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="写点啥"></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">更改</Button>
        <Button style="margin-left: 8px">清空</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formItem: {
          input: '',
          select: '',
          radio: 'male',
          checkbox: [],
          switch: true,
          date: '',
          time: '',
          slider: [20, 50],
          textarea: ''
        }
      }
    },
    methods:{
    }
  };
</script>
<style scoped>
.content-s{
  margin-top:40px;
  padding-right: 20px;
  padding-bottom: 10px;
}
.fh-nav {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  /* border-bottom: 1px solid #e8eaec; */
  z-index: 99;
}
.fh-nav ul {
  width: 6.4rem;
  height: 0.45rem;
  padding-top: 0.15rem;
  margin: 0 auto;
}
.fh-nav ul li {
  width: 0.29rem;
  height: 0.31rem;
  background: url(../assets/img/history.png) no-repeat 0 0;
  background-size: 100%;
  margin: 0 0 0 0.38rem;
}
</style>