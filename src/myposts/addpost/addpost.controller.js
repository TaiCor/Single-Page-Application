export default class dialogController {
  constructor ($mdDialog, serviceNewPost) {
    this.data = {}
    this.$mdDialog = $mdDialog
    this.serviceNewPost = serviceNewPost
  }

  addPost () {
    this.serviceNewPost.uploadPic(this.picFile, this.data.title, this.data.description)
    .then((res) => {
      this.responce = res.data
      this.$mdDialog.hide(res.data)
    })
  }
  checkInput () {
    if (this.data.title === undefined || this.data.description === undefined) {
      return true
    } else { return false }
  }
}
