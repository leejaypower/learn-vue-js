import Vue from 'vue';
import App from './App.vue';
// .vue 싱글파일 컴포넌트

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

/*
var App = {
  template : '<div>app</div>'
}

new Vue({
  el: '#app',
  components:{
    'app':App
  }
})
*/
