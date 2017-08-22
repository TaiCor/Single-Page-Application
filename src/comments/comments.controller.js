export default class commentsController {
  getCommentsCount () {
    return this.comments && Array.isArray(this.comments) ? this.comments.length : 0
  }
}
