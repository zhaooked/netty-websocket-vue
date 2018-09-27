// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import store from './store'
import vuex from 'vuex'
import { hybrid } from './until/inside'
import {post, fetch, patch, put, postFile} from './until/axios'
//定义全局变量
Vue.prototype.$hybrid = hybrid
Vue.prototype.$post = post
Vue.prototype.$fetch = fetch
Vue.prototype.$patch = patch
Vue.prototype.$put = put
Vue.prototype.$postFile = postFile

Vue.use(vuex);
Vue.config.productionTip = false

// import socket from './socket/socket'
// Vue.use(socket);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
