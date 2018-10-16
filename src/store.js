import Vuex, { mapGetters } from "vuex";
import Vue from "vue";
Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    commonData: {},
    loading: false,
    isShowMessageModal: false,
    message: '',
  },
  getters: {
    getCommonData: state => {
      return state.commonData;
    },
    getLoading: state => state.loading
  },
  mutations: {
    showLoading(state) {
      state.loading = true;
    },
    hideLoading(state) {
      state.loading = false;
    },
    setCommonData(state, data){
        state.commonData = data;
    },
    showModal(state, message){
      state.isShowMessageModal = true;
      state.message = message;
    },
    hideModal(state){
      state.isShowMessageModal = false;
      state.message = '';
    },
  }
});
