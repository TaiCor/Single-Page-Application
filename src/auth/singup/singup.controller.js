export default class singupController {
  constructor (serviceAuth, $location, $mdToast, serviceGetCurrentUser) {
    this.serviceGetCurrentUser = serviceGetCurrentUser
    this.serviceAuth = serviceAuth
    this.$location = $location
    this.data = {}
    this.$mdToast = $mdToast
  }
  singup () {
    this.serviceAuth.singup(this.data)
    .then(res => {
      if (res.data !== false) {
        this.serviceGetCurrentUser.setCurrentUser(res)
        this.$location.path('/allpost')
      } else {
        this.$mdToast.show(
          this.$mdToast.simple()
          .textContent('Login already exist')
          .position('top right')
          .hideDelay(3000)
        )
      }
    })
  }
}
