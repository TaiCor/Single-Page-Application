export default class editCommentervice {
  constructor ($http) {
    this.$http = $http
  }
  editComment (commentId, bodyComment) {
    return this.$http.post('http://localhost:3000/changeComment', {commentId, bodyComment}, { withCredentials: true })
  }
}
