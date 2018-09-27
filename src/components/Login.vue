<template>
  <div>
    <div>
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="phone" class="sr-only">Phone</label>
        <input type="text" id="phone" class="form-control" placeholder="Phone" v-model="phone">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" @click="login">登  录</button>
    </div>
  </div>
</template>
<script>
import { post } from '../until/axios'
import $ from 'jquery'
export default {
  name: 'Login',
  data () {
    return {
      phone: '',
      password: ''
    }
  },
  methods: {
    login () {
      let vm = this
      post('../chat/login', {phone: $('#phone').val(), password: $('#inputPassword').val()}).then((res) => {
        sessionStorage.setItem('sessionId', res.phone)
        vm.goChat()
      })
    },
    goChat () {
      this.$router.push({name: 'chat'})
    }
  }
}
</script>
