import myPosts from '../jsons/userposts'

export default class myPostService {
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q
  }
  getMyPosts () {
    return this.$q.when(myPosts)
  }
}
