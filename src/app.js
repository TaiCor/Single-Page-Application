import angular from 'angular'
import 'angular-ui-router'
import 'ng-file-upload'
import './style.css'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import 'angular-material-icons'
import post from './post/post.component'
import posts from './posts/posts.component'
import myPosts from './myposts/myposts.component'
import servicePost from './services/posts.service'
import serviceMyPost from './services/myposts.service'
import serviceSingup from './services/singup.service'
import route from './route.config'
import serviceComments from './services/comments.service'
import comments from './comments/comments.component'
import login from './login/login.component'
import singup from './singup/singup.component'
import addcomments from './addcomments/addcomments.component'
import serviceLogin from './services/login.service'
import serviceAddcomments from './services/addcomments.service'
import serviceDeleteComment from './services/deletecomment.service'
import serviceGetCurrentUser from './services/getcurrentUser.service'
import toolbar from './toolbar/toolbar.component'
import serviceLogout from './services/logout.service'
import serviceNewPost from './services/newpost.service'
import deletecomment from './deletecomment/deletecomment.component'
import serviceEditComment from './services/editcomment.service'
import serviceEditPost from './services/editpost.service'
import allpost from './allpost/allpost.component'
import serviceDeletePost from './services/deletepost.service'

angular.module('fotoalbum', ['ngMaterial', 'ui.router', 'ngFileUpload', 'ngMdIcons'])
  .component('posts', posts)
  .component('post', post)
  .component('myPosts', myPosts)
  .component('comments', comments)
  .component('login', login)
  .component('singup', singup)
  .component('addcomments', addcomments)
  .component('toolbar', toolbar)
  .component('deletecomment', deletecomment)
  .component('allpost', allpost)
  .service('servicePost', servicePost)
  .service('serviceMyPost', serviceMyPost)
  .service('serviceComments', serviceComments)
  .service('serviceSingup', serviceSingup)
  .service('serviceLogin', serviceLogin)
  .service('serviceAddcomments', serviceAddcomments)
  .service('serviceDeleteComment', serviceDeleteComment)
  .service('serviceGetCurrentUser', serviceGetCurrentUser)
  .service('serviceLogout', serviceLogout)
  .service('serviceNewPost', serviceNewPost)
  .service('serviceEditComment', serviceEditComment)
  .service('serviceEditPost', serviceEditPost)
  .service('serviceDeletePost', serviceDeletePost)
  .config(route)
  .run(['serviceGetCurrentUser', (serviceGetCurrentUser) => {
    serviceGetCurrentUser.getCurrentUser()
  }]
)
