export default class postsService {
  constructor ($http) {
    this.$http = $http
  }
  getPosts () {
    return this.$http.get('http://localhost:3000/getAllPhotos', { withCredentials: true })
  }
}
