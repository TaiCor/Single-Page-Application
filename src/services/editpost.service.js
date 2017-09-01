export default class editPostervice {
  constructor ($http) {
    this.$http = $http
  }
  editPost (photoId, title, description) {
    return this.$http.post('http://localhost:3000/changePhoto', {photoId, title, description}, { withCredentials: true })
  }
}
