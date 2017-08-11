export default class postController {
  constructor (serviceComments) {
    this.serviceComments = serviceComments
  }

  $onInit () {
    this.id = this.post.id
    this.url = this.post.url
    this.title = this.post.title
    this.description = this.post.description
    this.user = this.post.user
    this.date = this.post.date
  }

  getComments () { this.serviceComments.getComments(this.id).then(comments => { this.comments = comments }) }
}
