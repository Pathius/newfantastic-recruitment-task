import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("readablePrice", function (value) {
  if (value > 0) return value.toFixed(2);
  else return 0;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
