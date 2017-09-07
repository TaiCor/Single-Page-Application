export default class wrapperService {
  constructor ($http) {
    this.url = 'http://localhost:3000/'
    this.$http = $http
  }
  wrap (query, data, method = 'GET') {
    return this.$http({
      method,
      url: this.url + query,
      data,
      config: {
        withCredentials: true
      }
    })
  }
}