export default class singupService {
  constructor ($http) {
    this.$http = $http
  }
  singup (login, password, name) {
    return this.$http.get(`http://localhost:3000/register/${login}/${password}/${name}`)
  }
}
