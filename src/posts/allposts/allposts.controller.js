export default class controllerPhotos {
  constructor (servicePosts) {
    this.sort = 'date'
    this.servicePosts = servicePosts
    servicePosts.getPosts()
      .then(posts => {
        this.posts = posts.data
      })
  }
}
