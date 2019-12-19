import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import axios from "axios";

import stores from "./store/store";
import routes from "./router.js";

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.use(VueRouter);




require("./assets/css/base.css");

const router = new VueRouter({
  mode: "history", //切换路径模式，变成history模式
  scrollBehavior: () => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes
});

axios.interceptors.request.use(
  function(config) {
    //配置发送请求的信息
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function(response) {
    //配置请求回来的信息
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

/*axios.defaults.baseURL = (process.env.NODE_ENV !=='production' ? config.dev.httpUrl:config.build.httpUrl);
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';*/
//axios.defaults.baseURL='http://localhost:8082/';
Vue.prototype.$http = axios; //其他页面在使用axios的时候直接  this.$http就可以了

new Vue({
  el: "#app",
  router,
  store: stores,
  render: h => h(App)
});










(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc    = function () {
      var clientWidth = docEl.clientWidth;
      if (clientWidth>=640) {
          clientWidth = 640;
      };
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);