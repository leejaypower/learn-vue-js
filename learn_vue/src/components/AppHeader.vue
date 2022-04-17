<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>

</template>

<script>
// vue 스타일가이드에서는 컴포넌트의 이름을 두 단어의 조합으로 만드는 것을 강력권고한다.
// 그 이유는 예를 들어 main이라는 컴포넌트를 만들었을 때 그것이 html 표준태그인지 컴포넌트 태그인지 브라우저는 알 수가 없기 때문이다.

export default {
// 인스턴스 옵션
  props: ['propsdata'],
  methods: {
    sendEvent() {
      this.$emit('renew');
    },
  },
};
</script>

<style scoped>

</style>
