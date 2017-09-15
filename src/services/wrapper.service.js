export default class wrapperService {
  constructor ($http, baseUrl) {
    this.url = baseUrl
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
