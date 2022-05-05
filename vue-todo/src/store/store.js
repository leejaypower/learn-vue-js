import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i += 1) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
};

const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    getTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addOneItem(state, item) {
      const todoObj = { item, isComplete: false, isModify: false };
      localStorage.setItem(item, JSON.stringify(todoObj));
      state.todoItems.push(todoObj);
      // console.log(this); this는 store를 가리킴
    },
    removeOneItem(state, todoObj) {
      localStorage.removeItem(todoObj.todoItem.item);
      state.todoItems.splice(todoObj.index, 1);
    },
    toggleCheckItem(state, payload) {
      const sta = state;
      sta.todoItems[payload.index].isComplete = !sta.todoItems[payload.index].isComplete;
    },
    clearAllTodo(state) {
      localStorage.clear();
      state.todoItems.splice(0);
    },
  },
});

export default store;
