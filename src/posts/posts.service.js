import posts from '../jsons/userposts'

export default class postsService {
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q
  }
  getPosts () {
    return this.$q.when(posts)
  }
}
