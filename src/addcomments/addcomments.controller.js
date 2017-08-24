export default class addcommentsController {
  constructor (serviceAddcomments) {
    this.serviceAddcomments = serviceAddcomments
    this.comment = ''
  }
  addComment () {
    this.addcomment({post: this.postid, comment: this.comment})
    this.comment = ''
  }
}
