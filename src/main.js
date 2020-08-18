import Vue from 'vue';
import App from './App';
import 'lib-flexible/flexible'
import { router } from './router';

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
