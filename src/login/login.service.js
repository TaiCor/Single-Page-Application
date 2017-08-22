export default class loginService {
  constructor ($http) {
    this.$http = $http
  }
  login (data) {
    this.$http.post('http://localhost:3000/login', data)
  }
}
