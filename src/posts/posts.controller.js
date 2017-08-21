export default class controllerPhotos {
  constructor (servicePost) {
    this.servicePost = servicePost
    servicePost.getPosts()
      .then(posts => {
        this.posts = posts.data
      })
  }
}
