export default class getcurrentUser {
  constructor (wrapper) {
    this.wrapper = wrapper
    this.notAuth = true
    this.login = false
  }

  fetchCurrentUser () {
    return this.wrapper.wrap('getCurrentUser', 'GET')
      .then(user => {
        return user
      })
  }

  setCurrentUser (response) {
    if (response.data.id !== 0) {
      this.notAuth = false
      this.login = true
      this.user = response.data
      return this.user
    } else {
      this.notAuth = true
      this.login = false
      this.user = response.data
      return this.user
    }
  }

  getCurrentUser () {
    return this.fetchCurrentUser()
      .then((res) => {
        this.setCurrentUser(res)
      })
  }
}
