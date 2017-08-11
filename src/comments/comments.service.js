export default class commentsService {
  constructor ($http) {
    this.$http = $http
  }
  getComments (postId) {
    return this.$http.get('src/jsons/comments/comments' + postId + '.json')
      .then(resp => resp.data)
  }
}
