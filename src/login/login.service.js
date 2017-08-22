export default class loginService {
  constructor ($http) {
    this.$http = $http
  }
  login (data) {
    return this.$http.post('http://localhost:3000/login', data, {
      withCredentials: true
    })
  }
}
