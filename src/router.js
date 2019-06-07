import Vue from "vue";
import Router from "vue-router";
import New from "@/components/contact/New.vue";
import Show from "@/components/contact/Show.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "form",
      component: New
    },
    {
      path: "/contact/:id",
      name: "contact",
      component: Show
    }
  ]
});
