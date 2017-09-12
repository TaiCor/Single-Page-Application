export default class toolbarController {
  constructor (serviceGetCurrentUser, serviceAuth, $location, $mdDialog) {
    this.serviceGetCurrentUser = serviceGetCurrentUser
    this.serviceAuth = serviceAuth
    this.$location = $location
    this.$mdDialog = $mdDialog
    this.isActive = false
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
  showConfirm (ev) {
    let confirm = this.$mdDialog.confirm()
    .textContent('Are you sure you want to logout?')
    .ariaLabel('logout')
    .targetEvent(ev)
    .ok('No')
    .cancel('Yes')

    this.$mdDialog.show(confirm).then(
      () => { this.$mdDialog.hide() },
      () => { return this.logoutUser() }
    )
  }
  checkUser () {
    if (this.serviceGetCurrentUser.login) {
      return false
    } else {
      return true
    }
  }
  buttonActive (route) {
    let path = this.$location.path()
    if (path === route) {
      return true
    }
  }
}
