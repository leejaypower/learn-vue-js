<template>
  <form v-on:submit="submitForm">
    <div>
      <label for="username">id:</label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw:
        <input id="password" type="password" v-model="password">
      </label>
    </div>
    <button type="submit" v-on:click="submitForm">login</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  // 컴포넌트 단위로 개발을 할 때
  // data는 값의 참조가 일어나서 컴포넌트 간 데이터가 공유되지 않게끔 함수를 연결해서 새 객체를 연결해준다.
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submitForm(event) {
      event.preventDefault(); // form의 기본동작인 새로고침을 막음
      console.log(this.username, this.password);
      // fake API 사용
      const url = 'https://jsonplaceholder.typicode.com/users';
      const data = {
        username: this.username,
        password: this.password,
      };
      axios.post(url, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

</style>
