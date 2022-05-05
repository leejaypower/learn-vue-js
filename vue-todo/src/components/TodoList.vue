<template>
  <div>
    <transition-group
      name="list"
      tag="ul"
    >
      <li
        v-for="(todoItem, index) in getTodoItems"
        :key="todoItem.item"
        class="shadow"
      >
        <i
          class="checkBtn fas fa-check"
          :class="{checkBtnCompleted: todoItem.isComplete}"
          @click="toggleComplete(todoItem, index)"
        />
        <span :class="{textCompleted: todoItem.isComplete}">{{ todoItem.item }}</span>
        <span
          class="removeBtn"
          @click="removeTodo({todoItem, index})"
        >
          <i class="fas fa-trash-alt" />
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getTodoItems']),
    // getTodos() {
    //   return this.$store.getters.getTodoItems;
    // },
    // ...mapGetters({
    //   todoItems : 'getTodoItems'
    // })
  },
  // props: {
  //   todoItems: {
  //     type: Array,
  //     default: () => [],
  //   },
  // },
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem',
    }),

    toggleComplete(todoItem, index) {
      // this.$emit('toggleTodo', index);
      this.$store.commit('toggleCheckItem', { todoItem, index });
    },
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

.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
