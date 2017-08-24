export default class deleteCommentService {
  constructor ($http) {
    this.$http = $http
  }
  deleteComment (id) {
    return this.$http.post('http://localhost:3000/deleteCommentById', {id}, { withCredentials: true })
  }
}
