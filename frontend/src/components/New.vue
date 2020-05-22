<template>
  <div>
    <div class="las-header">
      <h3>{{ curNew.head }}</h3>
      <p>{{ curNew.body }}</p>
    </div>
  </div>
</template>
<script>
export default {
    name: "New",
    data(){
        return {
            curNew: {

            }
        }
    },
    methods: {
        async getNewById(){
            id = this.$route.params.id
            const res = await fetch(`http://localhost:80/news/:${id}`);
            this.curNew = await res.json();
        }
    },
    mounted() {
        this.getCurNew()
    }
}
</script>
<style lang="scss" scoped></style>
