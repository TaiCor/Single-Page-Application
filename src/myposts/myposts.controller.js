export default class myPostController {
  constructor (serviceMyPost) {
    this.serviceMyPost = serviceMyPost
    serviceMyPost.getMyPosts()
      .then(myPosts => {
        this.myPosts = myPosts
      })
  }
}
