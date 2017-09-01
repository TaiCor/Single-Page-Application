export default class getcurrentUser {
  constructor ($q, $http) {
    this.$q = $q
    this.$http = $http
    this.notAuth = true
    this.login = false
  }

  fetchCurrentUser () {
    return this.$http.get('http://localhost:3000/getCurrentUser', { withCredentials: true })
      .then(user => {
        return user
      })
  }

  setCurrentUser (response) {
    if (response.data.id !== 0) {
      this.notAuth = false
      this.login = true
      this.user = response.data
    } else {
      this.notAuth = true
      this.login = false
      this.user = response.data
      return this.user
    }
  }

  getCurrentUser () {
    this.fetchCurrentUser()
      .then((res) => {
        this.setCurrentUser(res)
        console.log(this.login)
        console.log(this.notAuth)
      })
  }
}
