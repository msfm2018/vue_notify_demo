import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { AMsg: "", BMsg: "", city: "城市名" },
  getters: {
    get_city(state) {
      return state.city;
    },
    gamsg(state){
      return state.AMsg;

    }
  },
  actions: {
    setCityName({ commit }, name) {
      commit("setCity", name);
    },
    receiveAMsg_1({ commit }, payload) {
      console.log("11111111111111111")
      commit("receiveAMsg", payload);
    },
    receiveBMsg_1({ commit }, payload) {
      console.log("2222222222222222")
      commit("receiveBMsg", payload);
    },
  },
  mutations: {
    receiveAMsg(state, payload) {
      console.log("44444444444" + payload.AMsg + '  ' + payload.BMsg)
      state.AMsg = payload.AMsg;
      // try {
      //   // 这里需要注意的是：由于vuex里，我们保存的状态，都是数组，而localStorage只支持字符串，所以需要用JSON转换：
      //   //
      //   // JSON.stringify(state.subscribeList);   // array -> string
      //   // JSON.parse(window.localStorage.getItem("subscribeList"));    // string -> array
      //   windwos.localStorage.setItem('state_date',JSON.stringify(state.AMsg))
      // }catch (e) {
      // }
    },
    receiveBMsg(state, payload) {
      // 将B组件的数据存放于state
      console.log("3333333333333333333333" + payload.AMsg + '  ' + payload.BMsg)
      state.BMsg = payload.BMsg;
    },
    setCity(state, name) {
      state.city = name;
    }
  },
  modules: {}
});
