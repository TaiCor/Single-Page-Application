export default class postController {
  constructor (serviceComments) {
    this.serviceComments = serviceComments
  }

  $onInit () {
    this.id = this.post.id
    this.getComments()
  }

  getComments () {
    this.serviceComments.getComments(this.post.id)
      .then(comments => {
        console.log(comments)
        this.comments = comments.data
      })
  }
}
