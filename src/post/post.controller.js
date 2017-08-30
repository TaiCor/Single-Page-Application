export default class postController {
  constructor (serviceComments, serviceAddcomments, serviceDeleteComment) {
    this.serviceDeleteComment = serviceDeleteComment
    this.serviceComments = serviceComments
    this.serviceAddcomments = serviceAddcomments
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

  deleteComment (commentId) {
    this.serviceDeleteComment.deleteComment(commentId)
    .then(() => {
      this.comments = this.comments.filter(comments => comments.id !== commentId)
      this.length -= 1
    })
  }
}
