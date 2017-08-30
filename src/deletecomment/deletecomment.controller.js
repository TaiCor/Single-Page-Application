export default class deleteComment {
  constructor (serviceDeleteComment) {
    this.serviceDeleteComment = serviceDeleteComment
  }
  delete () {
    console.log(this.commentid)
    this.serviceDeleteComment.deleteComment(this.commentid)
    .then(() => {})
  }
}
