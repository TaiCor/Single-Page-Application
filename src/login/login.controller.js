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
}
