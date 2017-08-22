export default class postsService {
  constructor ($http, $q) {
    this.$http = $http
    this.$q = $q
  }
  getPosts () {
    return this.$http.get('http://localhost:3000/getAllPhotos', { withCredentials: true })
  }
}
