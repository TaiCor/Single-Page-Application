export default class dialogController {
  constructor (title, description, id, servicePosts, $mdDialog) {
    this.title = title
    this.description = description
    this.id = id
    this.servicePosts = servicePosts
    this.$mdDialog = $mdDialog
  }
  edit () {
    this.servicePosts.editPost(this.id, this.title, this.description)
      .then((res) => {
        this.$mdDialog.hide(res.data)
      })
  }
}
