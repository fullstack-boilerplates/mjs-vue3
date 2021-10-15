import Vue from 'vue'
import Index from './index.vue'

new Vue({
  el: document.getElementById('vue-root'),
  render: h => h(Index)
})