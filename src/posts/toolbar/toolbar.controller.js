export default class toolbarController {
  constructor (serviceGetCurrentUser, serviceAuth, $location) {
    this.serviceGetCurrentUser = serviceGetCurrentUser
    this.serviceAuth = serviceAuth
    this.$location = $location
  }
  logoutUser () {
    this.serviceAuth.logout()
    .then(
    (res) => {
      this.$location.path('/allpost')
      this.serviceGetCurrentUser.setCurrentUser(res)
      this.session = res.data
    })
  }
  checkUser () {
    if (this.serviceGetCurrentUser.login) {
      return false
    } else {
      return true
    }
  }
}
