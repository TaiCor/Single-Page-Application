import posts from '../jsons/data.json'

export default class postsService {
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q
  }
  getPosts () {
    return this.$q.when(posts)
  }
}
