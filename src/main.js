import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Model from "@codeship/modelist";

Vue.config.productionTip = false;

const store = {
  state: {
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
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.record(contact);
    }
  },
  dispatch(mutation, data = {}) {
    this.mutations[mutation](this.state, data);
  }
};

Vue.prototype.$store = store;

new Vue({
  router,
  data() {
    return { store };
  },
  render: h => h(App)
}).$mount("#app");
