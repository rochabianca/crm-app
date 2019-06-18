import Vue from "vue";
import Vuex from "vuex";
import { collections } from "@/lib/firebase";
import Model from "@codeship/modelist";

export const structure = {
  state: {
    contacts: new Model({})
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.record(contact);
    },
    updateContact(state, contact) {
      state.contacts.update(contact.id, contact);
    }
  },
  actions: {
    addContact({ commit }, contact) {
      collections.contacts.add(contact).then(doc =>
        commit("addContact", {
          id: doc.id,
          ...contact
        })
      );
    },
    updateContact({ commit }, contact) {
      collections.contacts
        .doc(contact.id)
        .set(contact)
        .then(() => {
          commit("updateContact", contact);
        });
    }
  },
  getters: {
    contacts: s => s.contacts
  },
  plugins: [
    store => {
      collections.contacts.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          store.state.contacts.record(doc.data());
        });
      });
    }
  ]
};
Vue.use(Vuex);
export default () => new Vuex.Store({ ...structure });
