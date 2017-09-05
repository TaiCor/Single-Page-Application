import controller from './mycomments.controller'
import template from './mycomments.template.html'

export default {
  bindings: {
    comments: '=',
    deletecomment: '&',
    length: '='
  },
  template,
  controller
}
