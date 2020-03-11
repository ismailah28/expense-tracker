import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(require("vue-moment"));

Vue.filter("currency", function(num) {
  if (num < 0) {
    num = num * -1;
    return "-$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
});

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
