import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tests: [],
    homework: [],
    news: [],
    timetable: {},
  },
  mutations: {
    changeTests(state, tests) {
      state.tests = tests;
    },
    changeHomework(state, homework) {
      state.homework = homework;
    },
    changeNews(state, news) {
      state.news = news;
    },
    changeTimetable(state, timetable) {
      state.timetable = timetable;
    },
  },
  actions: {
    async getTests(ctx) {
      const res = await fetch("http://localhost:80/");
      const tests = await res.json();
      ctx.commit("changeTests", tests);
    },
    async getHomework(ctx) {
      const res = await fetch("http://localhost:80/");
      const homework = await res.json();
      ctx.commit("changeHomework", homework);
    },
    async getNews(ctx) {
      const res = await fetch("http://localhost:80/");
      const news = await res.json();
      ctx.commit("changeNews", news);
    },
    async getTests(ctx) {
      const res = await fetch("http://localhost:80/");
      const timetable = await res.json();
      ctx.commit("changeTimetable", timetable);
    },
  },
  modules: {},
});
