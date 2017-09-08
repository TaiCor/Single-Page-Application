export default class addcommentsController {
  constructor () {
    this.comment = ''
  }
  addComment () {
    if (this.comment !== '') {
      this.addcomment({post: this.postid, comment: this.comment})
      this.comment = ''
    }
  }
}
