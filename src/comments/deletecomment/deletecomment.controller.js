export default class deleteComment {
  constructor (serviceComments) {
    this.serviceComments = serviceComments
  }
  delete () {
    console.log(this.commentid)
    this.serviceComments.deleteComment(this.commentid)
    .then(() => {})
  }
}
