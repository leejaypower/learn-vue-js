<template>
  <div class="clearAllContainer">
    <button type="button" class="clearAllBtn shadow" v-on:click="clearAllTodo">clear All</button>
  </div>
</template>

<script>
export default {
  methods: {
    clearAllTodo() {
      localStorage.clear();
    },
  },
};
</script>

<style scoped>
.clearAllContainer{
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: 0 auto;
}

button{
  border: 0;
  width: inherit;
  height: inherit;
  border-radius: 30px;
}
.clearAllBtn{
  display: block;
  background-color: white;
  color: tomato;
}
</style>
