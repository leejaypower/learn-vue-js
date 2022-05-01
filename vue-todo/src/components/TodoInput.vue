<template>
  <div class="inputBox shadow">
    <input
      v-model="todoItemName"
      type="text"
      @keyup.enter="addTodo"
    >
    <button
      class="addContainer"
      @click="addTodo"
    >
      <i class="fas fa-plus addBtn" />
    </button>
    <modal
      v-if="showModal"
      @close="showModal = false"
    >
      <h3 slot="header">
        경고!
        <button @click="showModal = false">
          x
        </button>
      </h3>
      <div slot="body">
        할 일을 입력해주세요.
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from './common/BasicModal.vue';

export default {
  components: {
    Modal,
  },
  data() {
    return {
      todoItemName: '',
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.todoItemName) {
        this.$emit('addOneTodo', this.todoItemName);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.todoItemName = '';
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
  display: flex;
  width:50%;
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
  border: none;
  height: 50px;
  bottom: 50px;
  background: linear-gradient(to right, #fcb045, #fd1d1d);
  width: 3rem;
  border-radius: 50px;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
