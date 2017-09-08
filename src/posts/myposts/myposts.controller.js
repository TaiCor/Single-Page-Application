import controller from './addpost/addpost.controller'
import template from './addpost/addpost.template.html'

export default class myPostController {
  constructor (servicePosts, $mdDialog) {
    this.$mdDialog = $mdDialog
    this.sort = {query: 'date'}
    this.servicePosts = servicePosts
    servicePosts.getMyPosts()
      .then(myPosts => {
        this.myPosts = myPosts.data
      })
  }
  showDialog (event) {
    this.$mdDialog.show({
      controller,
      controllerAs: '$ctrl',
      template,
      targetEvent: event,
      clickOutsideToClose: true
    })
    .then((res) => this.myPosts.push(res))
  }
  deletePost (postId) {
    this.servicePosts.deletePost(postId)
    .then(() => {
      this.myPosts = this.myPosts.filter(posts => posts.id !== postId)
    })
  }
}
