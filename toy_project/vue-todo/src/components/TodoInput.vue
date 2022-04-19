<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo"><i class="fas fa-plus addBtn"></i></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        const obj = { item: this.newTodoItem, isComplete: false };
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
  },
};
</script>

<style scoped>
input{
 width: 90%;
}
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  width: 80%;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: auto;
}

.inputBox input{
  border-style: none;
  font-size: 0.9rem;
}

.addContainer{
  float: right;
  background: linear-gradient(to right, #fcb045, #fd1d1d);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
