import controller from './editcomment/editcomment.controller'
import template from './editcomment/editcomment.template.html'

export default class commentsController {
  constructor ($mdDialog, serviceGetCurrentUser) {
    this.$mdDialog = $mdDialog
    this.serviceGetCurrentUser = serviceGetCurrentUser
  }
  delete (commentId, ev) {
    let confirm = this.$mdDialog.confirm()
    .textContent('Delete this comment?')
    .ariaLabel('delete')
    .targetEvent(ev)
    .ok('No')
    .cancel('Yes')

    this.$mdDialog.show(confirm).then(
      () => { this.$mdDialog.hide() },
      () => { this.deletecomment({commentId: commentId}) }
    )
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
