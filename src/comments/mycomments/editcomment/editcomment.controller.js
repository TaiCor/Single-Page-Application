export default class dialogController {
  constructor (comment, id, serviceComments, $mdDialog) {
    this.$mdDialog = $mdDialog
    this.comment = comment
    this.id = id
    this.serviceComments = serviceComments
  }
  edit () {
    const data = [ this.comment, this.id ]
    this.serviceComments.editComment(this.id, this.comment)
      .then(() => {
        this.$mdDialog.hide(data)
      })
  }
}
