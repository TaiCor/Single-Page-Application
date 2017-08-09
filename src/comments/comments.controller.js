export default class commentsController {
  constructor (commentsService) {
    this.commentsService = this.commentsService
    commentsService.getComments()
    .then(comments => {
      this.comments = comments
    })
  }
  getCommentsCount () {
    return this.comments.length
  }
}
