import angular from 'angular'
import 'angular-ui-router'
import 'ng-file-upload'
import './style.css'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import post from './post/post.component'
import posts from './posts/posts.component'
import myPosts from './myposts/myposts.component'
import servicePost from './posts/posts.service'
import serviceMyPost from './myposts/myposts.service'
import serviceSingup from './singup/singup.service'
import route from './route.config'
import serviceComments from './comments/comments.service'
import comments from './comments/comments.component'
import login from './login/login.component'
import singup from './singup/singup.component'
import newpost from './newpost/newpost.component'
import addcomments from './addcomments/addcomments.component'
import serviceLogin from './login/login.service'

angular.module('fotoalbum', ['ngMaterial', 'ui.router', 'ngFileUpload'])
  .component('posts', posts)
  .component('post', post)
  .component('myPosts', myPosts)
  .component('comments', comments)
  .component('login', login)
  .component('singup', singup)
  .component('newpost', newpost)
  .component('addcomments', addcomments)
  .service('servicePost', servicePost)
  .service('serviceMyPost', serviceMyPost)
  .service('serviceComments', serviceComments)
  .service('serviceSingup', serviceSingup)
  .service('serviceLogin', serviceLogin)
  .config(route)
