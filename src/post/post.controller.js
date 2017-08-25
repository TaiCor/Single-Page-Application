export default class postController {
  constructor (serviceComments, serviceAddcomments) {
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
        this.data = {
          'author_name': this.author_name,
          'comment': this.comment,
          'commented': this.commented
        }
        this.comments.push(this.data)
        this.length += 1
      })
  }
}
