export default class singupController {
  constructor (serviceSingup, $location, $mdToast, serviceGetCurrentUser) {
    this.serviceGetCurrentUser = serviceGetCurrentUser
    this.serviceSingup = serviceSingup
    this.$location = $location
    this.data = {}
    this.$mdToast = $mdToast
  }
  singup () {
    this.serviceSingup.singup(this.data)
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
  checkInput () {
    if (this.data.name === undefined || this.data.login === undefined || this.data.password === undefined) {
      return true
    } else {
      return false
    }
  }
}
