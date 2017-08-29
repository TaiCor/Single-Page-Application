import controller from './dialog/dialog.controller'
import template from './dialog/dialog.template.html'

export default class myPostController {
  constructor (serviceMyPost, $mdDialog) {
    this.$mdDialog = $mdDialog
    this.serviceMyPost = serviceMyPost
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
}
