import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
// import mutations from './mutations';

Vue.use(Vuex)


const state={
  activeIndex:'1',
}

const mutations = {
  webheadernav(state,value){
    state.activeIndex = value;
  }
}
export default new Vuex.Store({
  // 在state中去声明全局变量，可以通过 this.$store.state 访问
  state,
  actions,
  mutations
})

