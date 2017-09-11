import mycomments from './mycomments/mycomments.component'
import allcomments from './allcomments/allcomments.component'
import addcomments from './addcomments/addcomments.component'

angular.module('commentsModule', [])
  .component('allcomments', allcomments)
  .component('addcomments', addcomments)
  .component('mycomments', mycomments)
