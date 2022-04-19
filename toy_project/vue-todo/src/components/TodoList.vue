<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
          <i class="checkBtn fas fa-check"  v-bind:class="{checkBtnCompleted: todoItem.isComplete}"
              v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted: todoItem.isComplete}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  methods: {
    removeTodo(todoItem, index) {
      console.log(todoItem);
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleComplete(item) {
      // eslint가 삼항연산자도, 매개변수 재할당도 허용하지 않는다...
      const todoItem = item;
      if (todoItem.isComplete) {
        todoItem.isComplete = false;
      } else {
        todoItem.isComplete = true;
      }
    },
  },
  created() { // 인스턴스가 생성되자마자 호출되는 라이프사이클 hook
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i += 1) { // eslint의 no plus plus rule로 인해..
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
};
</script>

<style scoped>
ul{
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  width: 75%;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn{
  margin-left: auto;
  color: tomato;
}
.checkBtn{
  line-height: 45px;
  color: #ededed;
  margin-right: 5px;
}

.checkBtnCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.textCompleted{
  text-decoration: line-through;
  color:#b3adad;
}

</style>
