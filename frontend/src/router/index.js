import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../components/Main.vue";

import Tests from "../components/Tests.vue";

import Timetable from "../components/Timetable.vue";

import Homework from "../components/Homework.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/tests",
    name: "Tests",
    component: Tests,
  },
  {
    path: "/homework",
    name: "Homework",
    component: Homework,
  },
  {
    path: "/timetable",
    name: "Timetable",
    component: Timetable,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
