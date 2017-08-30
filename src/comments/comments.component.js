import controller from './comments.controller'
import template from './comments.template.html'

export default {
  bindings: {
    comments: '=',
    deletecomment: '&'
  },
  template,
  controller
}
