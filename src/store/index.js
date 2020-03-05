import Vue from "vue";
import Vuex from "vuex";
import transactionModule from "./modules/transaction";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    transactionModule
  }
});
