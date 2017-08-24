export default class getcurrentUser {
  constructor ($http) {
    this.$http = $http
    this.notAuth = true
    this.login = false
  }
  getcurrentUser () {
    return this.$http.get('http://localhost:3000/getCurrentUser', { withCredentials: true })
    .then(response => {
    })
  }
}
