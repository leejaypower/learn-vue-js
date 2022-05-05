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
});

export default store;
