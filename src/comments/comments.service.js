export default class commentsService {
  constructor ($http) {
    this.$http = $http
  }
  getComments (postId) {
    let comments = this.$http.get('jsons/comments/comments' + postId + '.json')
    return comments
  }
}
