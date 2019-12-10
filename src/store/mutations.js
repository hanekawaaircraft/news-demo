import {
  HEAD_SHOW_SUCCESS,
  HEAD_SHOW_FAIL,
  FOOTER_HIDE,
  FOOTER_SHOW
} from "./type";

const state = {
  headShow: true,
  loading: false,
  footerShow: true
};

const mutations = {
  [HEAD_SHOW_SUCCESS](state) {
    state.headShow = true;
  },
  [HEAD_SHOW_FAIL](state) {
    state.headShow = false;
    //console.log(state.headShow);
  },
  /*footer*/
  [FOOTER_HIDE](state) {
    state.footerShow = false;
  },
  [FOOTER_SHOW](state) {
    state.footerShow = true;
  }
};

const getters = {
  headShow(state) {
    return state.headShow;
  },
  loading(state) {
    return state.loading;
  },
  footerShow(state) {
    return state.footerShow;
  }
};

export default {
  state,
  mutations,
  getters
};
