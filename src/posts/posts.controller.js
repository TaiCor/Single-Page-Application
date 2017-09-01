export default class controllerPhotos {
  constructor (servicePost) {
    this.sort = {query: 'date'}
    this.servicePost = servicePost
    servicePost.getPosts()
      .then(posts => {
        this.posts = posts.data
      })
  }
}
