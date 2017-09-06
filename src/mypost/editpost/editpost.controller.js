export default class dialogController {
  constructor (title, description, id, serviceEditPost, $mdDialog) {
    this.title = title
    this.description = description
    this.id = id
    this.serviceEditPost = serviceEditPost
    this.$mdDialog = $mdDialog
  }
  edit () {
    this.serviceEditPost.editPost(this.id, this.title, this.description)
      .then((res) => {
        this.$mdDialog.hide(res.data)
      })
  }
}
