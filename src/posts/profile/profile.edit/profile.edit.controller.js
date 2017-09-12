export default class profileEditController {
  constructor ($mdDialog, login, name, servicePosts) {
    this.$mdDialog = $mdDialog
    this.login = login
    this.name = name
    this.servicePosts = servicePosts
  }
  close () {
    this.$mdDialog.hide()
  }
  editProfile () {
    this.servicePosts.changeUser(this.login, this.name)
    .then((res) => {
      this.$mdDialog.hide(res.data)
    })
  }
}
