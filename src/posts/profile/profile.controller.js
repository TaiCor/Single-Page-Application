import template from './profile.edit/profile.edit.template.html'
import controller from './profile.edit/profile.edit.controller'
import templateChangePass from './profile.changePassword/profile.changePassword.template.html'
import controllerChangePass from './profile.changePassword/profile.changePassword.controller'

export default class profileController {
  constructor (serviceGetCurrentUser, $mdDialog) {
    this.$mdDialog = $mdDialog
    this.serviceGetCurrentUser = serviceGetCurrentUser
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
  changeDialog (event) {
    this.$mdDialog.show({
      template: templateChangePass,
      controller: controllerChangePass,
      controllerAs: '$ctrl',
      clickOutsideToClose: true,
      targetEvent: event
    })
  }
}
