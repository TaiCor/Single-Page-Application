export default class myPostService {
  constructor ($http) {
    this.$http = $http
  }
  getMyPosts () {
    return this.$http.get('http://localhost:3000/getUserPhotos')
  }
}
