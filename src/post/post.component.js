import template from './post.template.html'
import controller from './post.controller'

export default {
  bindings: {
    post: '=',
    deletepost: '&'
  },
  template,
  controller
}
