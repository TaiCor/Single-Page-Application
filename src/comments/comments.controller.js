export default class commentsController {
  delete (commentId) {
    console.log(typeof (this.deletecomment))
    console.log(commentId)
    this.deletecomment({commentId: commentId})
  }
}
