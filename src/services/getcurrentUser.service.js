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
        if (user.id === 0) {
          return this.$q.reject('Wrong token!')
        } else {
          return user
        }
      })
  }

  getcurrentUser () {
    this.fetchCurrentUser()
    .then(response => {
      if (response.id !== 0) {
        this.notAuth = false
        this.login = true
        this.user = response.data
      }
    })
  }
}
