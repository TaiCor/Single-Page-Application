import mycomments from './mycomments/mycomments.component'
import allcomments from './allcomments/allcomments.component'
import addcomments from './addcomments/addcomments.component'
import deletecomment from './deletecomment/deletecomment.component'

angular.module('commentsModule', [])
  .component('deletecomment', deletecomment)
  .component('allcomments', allcomments)
  .component('addcomments', addcomments)
  .component('mycomments', mycomments)
