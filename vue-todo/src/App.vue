<template>
  <div id="app">
    <todo-header />
    <todo-input />
    <todo-list />
    <todo-footer />
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  methods: {
    // addOneItem(item) {
    //   const todoObj = { item, isComplete: false, isModify: false };
    //   localStorage.setItem(item, JSON.stringify(todoObj));
    //   this.todoItems.push(todoObj);
    // },
    // removeOneItem(todoItem, index) {
    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },
    // modifyOneItem(todoItem, index) {
    //   if (this.todoItems[index].isModify) {
    //     this.todoItems[index].isModify = false;
    //   } else {
    //     this.todoItems[index].isModify = true;
    //   }
    // },
    // toggleCheckItem(index) {
    //   if (this.todoItems[index].isComplete) {
    //     this.todoItems[index].isComplete = false;
    //   } else {
    //     this.todoItems[index].isComplete = true;
    //   }
    // },
    // clearAllTodo() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // },
  },
};
</script>

<style>
body{
  text-align: center;
  background-color: #ededed
}

input{
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}
.shadow{
   box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
}
</style>
