export default class logoutService {
  constructor ($http) {
    this.$http = $http
  }
  logout () {
    return this.$http.post('http://localhost:3000/logout', {}, { withCredentials: true })
  }
}
