import template from './editpost/editpost.template.html'
import controller from './editpost/editpost.controller'

export default class postController {
  constructor (serviceComments, serviceAddcomments, serviceDeleteComment, $mdDialog) {
    this.serviceDeleteComment = serviceDeleteComment
    this.serviceComments = serviceComments
    this.serviceAddcomments = serviceAddcomments
    this.$mdDialog = $mdDialog
  }

  $onInit () {
    this.getComments()
  }

  getComments () {
    this.serviceComments.getComments(this.post.id)
      .then(comments => {
        this.comments = comments.data
        this.length = comments.data.length
      })
  }

  addComment (post, comment) {
    this.comment = comment
    this.serviceAddcomments.addComment(post, comment)
      .then(res => {
        this.author_name = res.data['0'].author_name
        this.commented = res.data['0'].commented
        this.comment_id = res.data['0'].comment_id
        this.author_id = res.data['0'].author_id
        this.data = {
          'author_name': this.author_name,
          'comment': this.comment,
          'commented': this.commented,
          'comment_id': this.comment_id,
          'author_id': this.author_id
        }
        this.comments.push(this.data)
        this.length += 1
      })
  }

  delete () {
    this.deletepost({postId: this.post.id})
  }
  deleteComment (commentId) {
    this.serviceDeleteComment.deleteComment(commentId)
    .then(() => {
      this.comments = this.comments.filter(comments => comments.id !== commentId)
      this.length -= 1
    })
  }
  editDialog (event, title, description, id) {
    this.$mdDialog.show({
      template,
      controller,
      controllerAs: '$ctrl',
      clickOutsideToClose: true,
      bindToController: true,
      targetEvent: event,
      locals: {title, description, id}
    })
    .then(res => {
      this.post.title = res.title
      this.post.description = res.description
      this.post.updated = res.updated
    })
  }
  checkUpdatePost () {
    if (this.post.updated === null) {
      return false
    } else {
      return true
    }
  }
}
