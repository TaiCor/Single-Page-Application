import myPosts from './userposts.json'

export default class mypostService {
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q
  }
  getMyposts () {
    return this.$q.when(myPosts)
  }
}
