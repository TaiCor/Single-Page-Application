export default class wrapperService {
  constructor ($http) {
    this.url = 'http://localhost:3000/'
    this.$http = $http
  }
  wrap (query, method, data) {
    return this.$http({
      method,
      url: `${this.url}${query}`,
      data,
      withCredentials: true
    })
  }
}
