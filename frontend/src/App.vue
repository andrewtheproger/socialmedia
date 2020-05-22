<template>
  <div id="app">
    <div class="las-nav">
      <div class="las-link">
        <router-link to="/">Главная</router-link>
      </div>
      <div class="las-link">
        <router-link to="/tests">Зачеты</router-link>
      </div>
      <div class="las-link">
        <router-link to="/homework">Д/з</router-link>
      </div>
      <div class="las-link">
        <router-link to="/timetable">Расписание</router-link>
      </div>
    </div>
    <router-view />
    <footer>
      <a href="https://vk.com/andreobokhonov">Техподдержка</a>
      <p>Разработка ЛПН, 2020</p>
    </footer>
  </div>
</template>
<script>

export default {
  name: "App",
  
  mounted() {
    
  },
};
</script>
<style lang="scss">
@import "config.scss";
a {
  color: white;
  &:hover {
    color: white;
  }
  &:visited {
    color: white;
  }
  &:active {
    color: white;
  }
}
.las-nav {
  display: flex;
  background-color: rgb(180, 0, 0);
  flex-direction: row;
}
.las-link {
  flex: 1;
  border: 1px solid red;
  height: 100px;
  text-align: center;
  background-color: rgb(180, 0, 0);
  font-size: 300%;
}
footer {
  background-color: rgb(180, 0, 0);
  text-align: center;
  font-size: 32px;
  p {
    color: white;
  }
}
</style>
