export default class commentsService {
  constructor ($http) {
    this.$http = $http
  }
  getComments (postId) {
    return this.$http.post('http://localhost:3000/getCommentsByPhotoId', { postId })
  }
}
