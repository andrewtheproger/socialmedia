<template>
  <div>
    <ul>
      <li v-for="lesson in timetable" :key="lesson">
        {{
          lesson + ": " + !rusToEng.isArray()
            ? !rusToEng(lesson)
              ? tests[rusToEng(lesson)]
              : ""
            : `Первая группа: ${tests[rusToEng(lesson)[0]]}, Вторая группа: ${
                tests[rusToEng(lesson)[1]]
              }`
        }}
      </li>
    </ul>
  </div>
</template>
<script>
import mapGetters from "vuex";
export default {
  name: "Homeworkwidget",
  computed: mapGetters(["timetable", "tests"]),
  methods: {
    rusToEng(subj) {
      switch (subj) {
        case "Русский язык":
          return "russian";
        case "Литература":
          return "literature";
        case "Английский язык":
          return ["englishone", "englishtwo"];
        case "История":
          return "history";
        case "Обществозание":
          return "sociology";
        case "География":
          return "geography";
        case "Биология":
          return "biology";
        case "Химия":
          return "chemistry";
        case "Алгебра":
          return "algebra";
        case "Геометрия":
          return "geometry";
        case "Физика":
          return "physics";
        case "Информатика":
          return ["computerscienceone", "computersciencetwo"];
        case "Технология":
          return "technology";
        case "Музыка":
          return "music";
        case "ИЗО":
          return "art";
        case "Физкультура":
          return "pe";
        default:
          return false;
      }
    },
  },
};
</script>
<style lang="scss"></style>
