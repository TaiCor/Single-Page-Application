import template from './addcomments.template.html'
import controller from './addcomments.controller'

export default {
  bindings: {
    postid: '=',
    addcomment: '&'
  },
  template,
  controller
}
