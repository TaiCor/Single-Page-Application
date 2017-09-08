export default class loginController {
  constructor (serviceAuth, $location, $mdToast, serviceGetCurrentUser) {
    this.serviceGetCurrentUser = serviceGetCurrentUser
    this.serviceAuth = serviceAuth
    this.data = {}
    this.$location = $location
    this.$mdToast = $mdToast
  }
  login () {
    this.serviceAuth.login(this.data)
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
}
