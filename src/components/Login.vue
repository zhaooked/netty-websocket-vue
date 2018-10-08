<template>
  <div style="padding-top: 20%;">
    <div style="
          margin: auto;
          border-radius: 10px;
          width: 300px;
          padding: 20px;
          -webkit-box-shadow: 0px 0px 10px 10px rgba(0,0,0,.075);
          box-shadow: 0px 0px 10px 10px rgba(0,0,0,.075);">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="phone" class="sr-only">Phone</label>
        <input type="text" id="phone" class="form-control" placeholder="Phone" v-model="phone" style="display: block;
    height: 25px;
    width: 90%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.1;
    color: #555;
    margin-top: 10px;
    margin-bottom: 10px;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;">
        <button class="btn btn-lg btn-primary btn-block" @click="login" style="    display: inline-block;
    padding: 6px 12px;
    width: 50%;
    margin-top: 5px;
    margin-left: 25%;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;    color: #333;
    background-color: #fff;
    border-color: #ccc;">登  录</button>
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
      password: '123465'
    }
  },
  methods: {
    login () {
      if (this.phone === '') {
        alert('Please enter phone number')
      }
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
