import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(require("vue-moment"));

const regPattern = /(\d)(?=(\d{3})+(?!\d))/g;
Vue.filter("currency", num => {
  if (num < 0) {
    num = num * -1;
    return "-$" + num.toFixed(2).replace(regPattern, "$1,");
  }
  return "$" + num.toFixed(2).replace(regPattern, "$1,");
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
