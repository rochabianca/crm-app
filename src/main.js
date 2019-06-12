import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Model from "@codeship/modelist";

Vue.config.productionTip = false;

const store = {
  contacts: new Model({
    setPrimaryKey: true,
    data: [
      {
        name: "Jane Doe"
      },
      {
        name: "John Doe"
      }
    ]
  })
};

new Vue({
  router,
  data() {
    return store;
  },
  render: h => h(App)
}).$mount("#app");
