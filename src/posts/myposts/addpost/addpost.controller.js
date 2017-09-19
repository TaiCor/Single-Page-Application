export default class dialogController {
  constructor ($mdDialog, servicePosts) {
    this.data = {}
    this.$mdDialog = $mdDialog
    this.servicePosts = servicePosts
  }

  addPost () {
    this.servicePosts.addPost(this.picFile, this.data.title, this.data.description)
    .then((res) => {
      this.$mdDialog.hide(res.data)
    })
  }
}
