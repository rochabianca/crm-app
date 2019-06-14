import Vue from "vue";
import Vuex from "vuex";

import Model from "@codeship/modelist";

Vue.use(Vuex);

export default new Vuex.Store({
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
  actions: {
    addContact({ commit }, contact) {
      commit("addContact", contact);
    }
  },
  getters: {
    contacts: s => s.contacts
  }
});
