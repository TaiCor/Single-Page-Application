export default class addcommentsService {
  constructor ($http) {
    this.$http = $http
  }
  addComment (photoId, comment) {
    this.$http.post('http://localhost:3000/addComment', {photoId, comment}, { withCredentials: true })
  }
}
