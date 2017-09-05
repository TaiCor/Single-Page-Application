import controller from './dialog/dialog.controller'
import template from './dialog/dialog.template.html'

export default class commentsController {
  constructor ($mdDialog, serviceGetCurrentUser) {
    this.$mdDialog = $mdDialog
    this.serviceGetCurrentUser = serviceGetCurrentUser
  }
  delete (commentId) {
    this.deletecomment({commentId: commentId})
  }

  showDialog (event, comment, id) {
    this.$mdDialog.show({
      controller,
      controllerAs: '$ctrl',
      template,
      targetEvent: event,
      clickOutsideToClose: true,
      bindToController: true,
      locals: {comment, id}
    })
    .then((res) => {
      this.result = this.comments.find(x => x.id === res[1])
      this.result.comment = res[0]
      console.log(this.result)
    })
  }
}
