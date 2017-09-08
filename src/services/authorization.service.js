export default class authService {
  constructor (wrapper) {
    this.wrapper = wrapper
  }
  login (data) {
    return this.wrapper.wrap('login', 'POST', data)
  }

  singup (data) {
    return this.wrapper.wrap('register/', 'POST', data)
  }

  logout () {
    return this.wrapper.wrap('logout', 'POST')
  }
}
