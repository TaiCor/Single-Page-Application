import controller from './dialog/dialog.controller'
import template from './dialog/dialog.template.html'

export default class myPostController {
  constructor (serviceMyPost, $mdDialog, serviceDeletePost) {
    this.$mdDialog = $mdDialog
    this.sort = {query: 'date'}
    this.serviceMyPost = serviceMyPost
    this.serviceDeletePost = serviceDeletePost
    serviceMyPost.getMyPosts()
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
    this.serviceDeletePost.deletePost(postId)
    .then(() => {
      this.myPosts = this.myPosts.filter(posts => posts.id !== postId)
    })
  }
}
