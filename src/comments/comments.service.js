export default class commentsService {
  constructor ($http) {
    this.$http = this.$http
  }
  getComments (postId) {
    return this.$http.get('jsons/comments/comments' + postId + '.json')
  }
}
