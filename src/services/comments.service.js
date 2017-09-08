export default class commentsService {
  constructor (wrapper) {
    this.wrapper = wrapper
  }
  getComments (postId) {
    return this.wrapper.wrap('getCommentsByPhotoId', 'POST', {postId})
  }

  addComment (photoId, comment) {
    return this.wrapper.wrap('addComment', 'POST', {photoId, comment})
  }

  deleteComment (commentId) {
    return this.wrapper.wrap('deleteCommentById', 'POST', {commentId})
  }

  editComment (commentId, bodyComment) {
    return this.wrapper.wrap('changeComment', 'POST', {commentId, bodyComment})
  }
}
