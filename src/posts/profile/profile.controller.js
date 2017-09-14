import template from './profile.edit/profile.edit.template.html'
import controller from './profile.edit/profile.edit.controller'
import templateChangePass from './profile.changePassword/profile.changePassword.template.html'
import controllerChangePass from './profile.changePassword/profile.changePassword.controller'

export default class profileController {
  constructor (serviceGetCurrentUser, $mdDialog, $mdToast) {
    this.$mdDialog = $mdDialog
    this.serviceGetCurrentUser = serviceGetCurrentUser
    this.$mdToast = $mdToast
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
    .then((res) => {
      if (res) {
      this.serviceGetCurrentUser.user.login = res.login
      this.serviceGetCurrentUser.user.name = res.name
      } else {
        this.$mdToast.show(
          this.$mdToast.simple()
            .textContent('Login is already taken')
            .position('top right')
            .hideDelay(3000)
        )
      }
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
