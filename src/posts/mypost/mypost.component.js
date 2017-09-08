import template from './mypost.template.html'
import controller from './mypost.controller'

export default {
  bindings: {
    post: '=',
    deletepost: '&'
  },
  template,
  controller
}
