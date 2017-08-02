import myPosts from './userposts.json'

export default class myPostService {
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q
  }
  getMyPosts () {
    return this.$q.when(myPosts)
  }
}
