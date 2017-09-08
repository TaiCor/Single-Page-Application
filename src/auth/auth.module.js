import login from './login/login.component'
import singup from './singup/singup.component'

angular.module('authModule', [])
  .component('login', login)
  .component('singup', singup)
