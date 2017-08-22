import controller from './comments.controller'
import template from './comments.template.html'

export default {
  bindings: {
    comments: '=',
    postid: '='
  },
  template,
  controller
}
