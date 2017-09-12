import template from './profile.edit/profile.edit.template.html'
import controller from './profile.edit/profile.edit.controller'

export default class profileController {
  constructor (serviceGetCurrentUser, $mdDialog) {
    this.$mdDialog = $mdDialog
    this.serviceGetCurrentUser = serviceGetCurrentUser
  }
  changeUser () {
    this.servicePosts.changeUser(this.serviceGetCurrentUser.user.login, this.serviceGetCurrentUser.user.name)
  }
  editDialog (event, name, login) {
    this.$mdDialog.show({
      template,
      controller,
      controllerAs: '$ctrl',
      clickOutsideToClose: true,
      bindToController: true,
      targetEvent: event,
      locals: {name, login}
    })
    .then(res => {
      this.serviceGetCurrentUser.user.login = res.login
      this.serviceGetCurrentUser.user.name = res.name
    })
  }
}
