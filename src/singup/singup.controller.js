export default class singupController {
  constructor (serviceSingup, $location, $mdToast) {
    this.serviceSingup = serviceSingup
    this.$location = $location
    this.data = {}
    this.$mdToast = $mdToast
  }
  singup () {
    this.serviceSingup.singup(this.data)
    .then(res => {
      if (res.data !== false) {
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
