export default class singupService {
  constructor ($http) {
    this.$http = $http
  }
  singup (data) {
    return this.$http.post(`http://localhost:3000/register/`, data)
  }
}
