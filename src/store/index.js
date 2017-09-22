/* eslint-disable */
// import Vue from 'vue'
// import Vuex from 'vuex'
// import { state, mutations} from './mutations.js'
// import * as getters from './getter.js'
// import * as actions from './action.js'

// Vue.use (Vuex);

// export default new Vuex.Store({
//     state,
//     mutations,
//     getters,
//     actions,
//     // 禁止直接修改 state
//     strict:true
// });


import Vue from 'vue';
import Vuex from 'vuex';
// root
import * as getters from './getter.js';
import {state, actions, mutations} from './root.js';
// modules
import count from './modules/count';
import todo from './modules/todo';
import shop from './modules/shop';
import opendata from './modules/opendata.js';

Vue.use( Vuex );

export default new Vuex.Store({
  // root
  getters,
  state,
  actions,
  mutations,
  // 將整理好的 modules 放到 vuex 中組合
  modules: {
    count,
    todo,
    shop,
    opendata
  },
  // 嚴格模式，禁止直接修改 state
  strict: true
});

