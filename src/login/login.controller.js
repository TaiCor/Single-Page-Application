export default class loginController {
  constructor (serviceLogin, $location, $mdToast, serviceGetCurrentUser) {
    this.serviceGetCurrentUser = serviceGetCurrentUser
    this.serviceLogin = serviceLogin
    this.data = {}
    this.$location = $location
    this.$mdToast = $mdToast
  }
  login () {
    this.serviceLogin.login(this.data)
      .then(res => {
        if (res.data !== false) {
          this.serviceGetCurrentUser.setCurrentUser(res)
          this.$location.path('/allpost')
        } else {
          this.$mdToast.show(
            this.$mdToast.simple()
            .textContent('Invalid login or password')
            .position('top right')
            .hideDelay(3000)
          )
        }
      })
  }
  checkInput () {
    if (this.data.password === undefined || this.data.login === undefined) {
      console.log(this.data.password)
      return true
    } else {
      console.log(this.data.password)
      return false
    }
  }
}
