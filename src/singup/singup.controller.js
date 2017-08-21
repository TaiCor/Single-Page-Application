export default class singupController {
  constructor (serviceSingup, $location) {
    this.serviceSingup = serviceSingup
    this.$location = $location
    this.login = ''
    this.name = ''
    this.password = ''
  }
  singup () {
    this.serviceSingup.singup(this.login, this.password, this.name)
    .then(this.$location.path('/allpost'))
  }
}
