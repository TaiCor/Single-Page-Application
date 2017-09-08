export default class postController {
  constructor (serviceComments, $mdDialog, serviceGetCurrentUser) {
    this.serviceComments = serviceComments
    this.$mdDialog = $mdDialog
    this.serviceGetCurrentUser = serviceGetCurrentUser
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
    this.serviceComments.addComment(post, comment)
      .then(res => {
        this.author_name = res.data['0'].author_name
        this.commented = res.data['0'].commented
        this.comment_id = res.data['0'].comment_id
        this.data = {
          'author_name': this.author_name,
          'comment': this.comment,
          'commented': this.commented,
          'id': this.comment_id
        }
        this.comments.push(this.data)
        this.length += 1
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
