<template>
  <div>
    <div class="las-header">
      <h3>Новости</h3>
      <div v-for="item in news" :key="item" class="las-new">
        <h3>{{ item.head }}</h3>
        <p>{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Newswidget",
  props: ["news"],
  methods: {},
};
</script>
<style lang="scss">
.las-header {
  border: 1px solid rgb(180, 0, 0);
  p {
    color: black;
  }
}
.las-new {
  background-color: rgb(180, 0, 0);
  p {
    color: white;
  }
}
</style>
