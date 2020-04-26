<template>
  <div id="app">
    <div class="las-nav">
      <div class="las-link">
        <router-link to="/">Home</router-link>
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
  </div>
</template>

<style lang="scss">
a:active {
  color: white !important;
}
a:visited {
  color: white !important;
}
a:hover {
  color: white !important;
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
  font-size: 300%
}
</style>
