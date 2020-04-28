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
      const res = await fetch("http://localhost:80/tests");
      const tests = await res.json();
      ctx.commit("changeTests", tests);
    },
    async getHomework(ctx) {
      const res = await fetch("http://localhost:80/homework");
      const homework = await res.json();
      ctx.commit("changeHomework", homework);
    },
    async getNews(ctx) {
      const res = await fetch("http://localhost:80/news");
      const news = await res.json();
      ctx.commit("changeNews", news);
    },
    async getTimetable(ctx) {
      const res = await fetch("http://localhost:80/timetable");
      const timetable = await res.json();
      ctx.commit("changeTimetable", timetable);
    },
  },
  getters: {
    news(state) {
      return state.news;
    },
    timetable(state) {
      return state.timetable;
    },
    homework(state) {
      return state.homework;
    },
    tests(state) {
      return state.tests;
    },
  },
  modules: {},
});
