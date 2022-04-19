<template>
<div id="app">
  <todo-header></todo-header>
  <todo-input></todo-input>
  <todo-list></todo-list>
  <todo-footer></todo-footer>
</div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
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
