<template>
  <div id="app">
    <NavHeader v-show="headShow"></NavHeader>
    <transition name="slide-down">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    <FooterView v-show="footerShow"></FooterView>
  </div>
</template>
<script>
import NavHeader from "./components/Nav.vue";
import FooterView from "./components/Footer.vue";

import Home from "./components/Home.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    Home,
    NavHeader,
    FooterView
  },
  computed: mapGetters(["headShow", "footerShow"]),
  mounted() {
    var path = this.$route.path.substring(1);
    this.headerChange(path);
    this.footerChange(path);
  },
  watch: {
    $route(to) {
      var path = to.path.substring(1);
      this.headerChange(path);
      this.footerChange(path);
    }
  },
  methods: {
    headerChange(path) {
      if (
        path == "user-info" ||
        path == "user-reg" ||
        path == "user-login" ||
        path == "forget"   ||
        path.indexOf("article") != -1
      ) {
        this.$store.dispatch("SHOW_HEAD_FAIL");
      } else {
        this.$store.dispatch("SHOW_HEAD_SUCC");
      }
    },
    footerChange(path) {
      if (path == "Home"   ||
        path == "Follow" ||
        path == "Column" ||
        path.indexOf("article") == -1) {
        this.$store.dispatch("showFooter");
      } else {
        this.$store.dispatch("hideFooter");
      }
    }
  }
};
</script>
