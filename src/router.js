//import Vue from 'vue'

import Home from "./components/Home.vue";
import Follow from "./components/Follow.vue";
import Column from "./components/Column.vue";
import UserInfo from "./components/UserInfo.vue";
import UserLogin from "./components/UserLogin.vue";
import UserReg from "./components/UserReg.vue";
import Article from "./components/Article.vue";
import ColumnData from "./components/ColumnData.vue";
import FollowData from "./components/FollowData.vue";
import Forget from "./components/Forget.vue";
import settime from "./components/settime.vue";
// import fx from "./components/Fx.vue";
import setting from "./components/Setting.vue";
import collect from "./components/admin/collect.vue";
import draft from "./components/admin/draft.vue";
import secret from "./components/admin/secret.vue";
import open from "./components/admin/open.vue";
import fans from "./components/admin/fans.vue";

export default [
  {
    path: "/home",
    component: Home,
    name:"home"
  },
  {
    path: "/follow",
    component: Follow
  },
  {
    path: "/column",
    component: Column
  },
  {
    path: "/user-info",
    component: UserInfo
  },
  {
    path: "/user-login",
    component: UserLogin
  },
  {
    path: "/user-reg",
    component: UserReg
  },
  {
    path: "/forget",
    component: Forget
  },
  {
    path: "/settime",
    component: settime
  },
  {
    path: "/setting",
    component: setting
  },
  {
    path: "/collect",
    component: collect
  },
  {
    path: "/draft",
    component: draft
  },
  {
    path: "/secret",
    component: secret
  },
  {
    path: "/open",
    component: open
  },
  {
    path: "/fans",
    component: fans
  },
  // {
  //   path: "/fx/:id",
  //   component: fx,
  //   name:"fx"
  // },
  {
    path: "/article/:id",
    component: Article,
    name:"article"
    /*children:[
      {
        path:'/:id',
        component:Article
      }
    ]*/
  },
  {
    path: "/columndata/:id",
    component: ColumnData
    /*children:[
      {
        path:'/:id',
        component:columndata
      }
    ]*/
  },
  {
    path: "/followdata/:id",
    component: FollowData
    /*children:[
      {
        path:'/:id',
        component:FollowData
      }
    ]*/
  },
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "*",
    redirect: "/home"
  }
];
