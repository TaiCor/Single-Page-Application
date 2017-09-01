export default class toolbarController {
  constructor (serviceGetCurrentUser, serviceLogout, $location) {
    this.serviceGetCurrentUser = serviceGetCurrentUser
    this.serviceLogout = serviceLogout
    this.$location = $location
  }
  logoutUser () {
    this.serviceLogout.logout()
    .then(
    (res) => {
      this.serviceGetCurrentUser.setCurrentUser(res)
      this.session = res.data
      console.log(this.session.id)
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
