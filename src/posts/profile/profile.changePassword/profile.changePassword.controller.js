export default class changePassword {
  constructor ($mdDialog, servicePosts, $mdToast) {
    this.$mdDialog = $mdDialog
    this.servicePosts = servicePosts
    this.$mdToast = $mdToast
  }
  changePassword (oldPass, newPass) {
    this.servicePosts.changePassword(oldPass, newPass)
    .then(res => {
      if (res.data) {
        this.$mdDialog.hide()
        this.$mdToast.show(
          this.$mdToast.simple()
            .textContent('New password saved!')
            .position('top right')
            .hideDelay(2000)
        )
      } else {
        this.$mdToast.show(
          this.$mdToast.simple()
            .textContent('Incorrect old password!')
            .position('top right')
            .hideDelay(2000)
        )
      }
    })
  }
}
