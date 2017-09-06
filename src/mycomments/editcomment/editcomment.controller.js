export default class dialogController {
  constructor (comment, id, serviceEditComment, $mdDialog) {
    this.$mdDialog = $mdDialog
    this.comment = comment
    this.id = id
    console.log(this.id)
    console.log(this.comment)
    this.serviceEditComment = serviceEditComment
  }
  edit () {
    console.log(this.comment)
    this.data = [ this.comment, this.id ]
    this.serviceEditComment.editComment(this.id, this.comment)
    .then(() => {
      this.$mdDialog.hide(this.data)
    })
  }
}
