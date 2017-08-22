export default class loginController {
  constructor (serviceLogin, $location) {
    this.serviceLogin = serviceLogin
    this.data = {}
    this.$location = $location
  }
  login () {
    this.serviceLogin.login(this.data).then(this.$location.path('/allpost'))
  }
}
