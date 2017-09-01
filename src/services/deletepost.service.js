export default class {
  constructor ($http) {
    this.$http = $http
  }
  deletePost (photoId) {
    return this.$http.post('http://localhost:3000/deletePhotoById', {photoId}, { withCredentials: true })
  }
}
