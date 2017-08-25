export default class getcurrentUser {
  constructor ($http) {
    this.$http = $http
    this.notAuth = true
    this.login = false
  }
  currentUser () {
    return this.$http.get('http://localhost:3000/getCurrentUser', { withCredentials: true })
  }
  getcurrentUser () {
    this.currentUser()
    .then(response => {
      if (response.id !== 0) {
        this.notAuth = false
        this.login = true
        this.user = response.data['0']
      }
    })
  }
}
