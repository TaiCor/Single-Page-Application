export default class addcommentsController {
  constructor (serviceAddcomments) {
    this.serviceAddcomments = serviceAddcomments
    this.comment = ''
  }
  addComment () {
    this.serviceAddcomments.addComment(this.postid, this.comment)
  }
}
