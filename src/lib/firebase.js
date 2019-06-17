import Vue from "vue";
import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCZQLT2e0oO0O3le34NYxGNG2BkGjRK1_k",
  authDomain: "crm-app-12b55.firebaseapp.com",
  databaseURL: "https://crm-app-12b55.firebaseio.com",
  projectId: "crm-app-12b55",
  storageBucket: "crm-app-12b55.appspot.com",
  messagingSenderId: "738465183327",
  appId: "1:738465183327:web:3d8214fc86d090bd"
});

export const db = firebaseApp.firestore();

export const collections = {
  contacts: db.collection("contacts")
};
