export default class postController {
  constructor (serviceComments) {
    this.serviceComments = serviceComments
  }

  $onInit () {
    this.id = this.post.id
    this.title = this.post.title
    this.description = this.post.description
    this.user = this.post.author_name
    this.date = this.post.created
    this.getComments()
  }

  getComments () {
    this.serviceComments.getComments(this.id)
      .then(comments => {
        console.log(comments)
        this.comments = comments.data
      })
  }
}
