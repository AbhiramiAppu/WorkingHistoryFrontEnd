import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/addEmployee",
      name: "addEmployee",
      component: () => import("@/components/WorkingHistoryAdd")
    }
  ]
});