export default class controllerPhotos {
  constructor (servicePosts, sortfields) {
    this.sort = sortfields['0'].sortKey
    this.servicePosts = servicePosts
    servicePosts.getPosts()
      .then(posts => {
        this.posts = posts.data
      })
  }
}
