export default class myPostController {
  constructor (myPostService) {
    this.myPostService = myPostService
    myPostService.getMyPosts()
      .then(myPosts => {
        this.myPosts = myPosts
      })
  }
}
