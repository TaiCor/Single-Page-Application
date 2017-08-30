export default class deleteCommentService {
  constructor ($http) {
    this.$http = $http
  }
  deleteComment (commentId) {
    return this.$http.post('http://localhost:3000/deleteCommentById', {commentId}, { withCredentials: true })
  }
}
