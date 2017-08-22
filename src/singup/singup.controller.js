export default class singupController {
  constructor (serviceSingup, $location) {
    this.serviceSingup = serviceSingup
    this.$location = $location
    this.data = {}
  }
  singup () {
    this.serviceSingup.singup(this.data)
    .then(this.$location.path('/allpost'))
  }
}
