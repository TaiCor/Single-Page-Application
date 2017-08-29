import controller from './dialog/dialog.controller'
import template from './dialog/dialog.template.html'

export default class newPostController {
  constructor ($mdDialog) {
    this.$mdDialog = $mdDialog
  }
  showDialog (event) {
    this.$mdDialog.show({
      controller,
      controllerAs: '$ctrl',
      template,
      targetEvent: event,
      fullscreen: true,
      clickOutsideToClose: true
    })
      .then(res => console.log('res: ', res))
  }
}
