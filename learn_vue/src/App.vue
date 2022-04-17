<template>
<!-- template안에 최상위 element는 하나여야한다.(root) 병렬 불가능 -->
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>

/*
vue-cli를 사용하는 이유 - cli는 뷰 프로젝트를 시작할 때 기본적으로 구성해야 하는 라이브러리를 별도로 검색, 설치를 하지 않고도
시작할 수 있게 도와준다. 직접 환경을 구성하기까지 걸리는 시간을 단축할 수 있다.

const AppHeader = {
  template: '<header><h1>Header</h1></header>
}
 컴포넌트의 내용을 정의하고, 그 내용(위 객체처럼이 아니라 파일로 import)을 받아서 변수에 넣음
*/
import AppHeader from './components/AppHeader.vue';

/*
new Vue({
  data: {
    str: 'hi'
  }
})
cli에서는 컴포넌트 재사용률이 낮다. 여러개의 컴포넌트에서 동일한 값을 참조하면 안되기 때문이다.
*/
export default {
  data() {
    return {
      str: 'Header',
    };
  },
  components: {
    // 'app-Header': AppHeader,
    AppHeader,
  },
  methods: {
    renewStr() {
      this.str = 'hi';
    },
  },
};
</script>

<style scoped>
/* style태그의 scoped 속성은 현재 컴포넌트 엘리먼트에만 css가 적용된다는 뜻이다. */

</style>
