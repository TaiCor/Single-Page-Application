export default class addcommentsService {
  constructor ($http) {
    this.$http = $http
  }
  addComment (postId, comment) {
    this.$http.post('http://localhost:3000/addComment', {postId, comment}, { withCredentials: true })
  }
}
