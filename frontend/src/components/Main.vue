<template>
  <div class="las-app"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Main",
  methods: {
    ...mapActions(["getTests", "getHomework", "getTimetable", "getNews"]),
  },
  computed: mapGetters(["news", "timetable", "tests", "homework"]),
  data() {
    return {

    };
  },
  mounted() {
    this.getTests();
    this.getHomework();
    this.getTimetable();
    this.getNews();
    console.log(this);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
