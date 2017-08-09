import comments from '../jsons/comments'

export default class commentService {
  constructor ($q, $http) {
    this.$q = this.$q
    this.$http = this.http
  }
  getComments () {
    return this.$q.when(comments)
  }
}