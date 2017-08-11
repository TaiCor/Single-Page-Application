import angular from 'angular'
import './style.css'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import post from './post/post.component'
import posts from './posts/posts.component'
import myPosts from './myposts/myposts.component'
import servicePost from './posts/posts.service'
import serviceMyPost from './myposts/myposts.service'
import 'angular-ui-router'
import route from './route.config'
import serviceComments from './comments/comments.service'
import comments from './comments/comments.component'

angular.module('fotoalbum', ['ngMaterial', 'ui.router'])
  .component('posts', posts)
  .component('post', post)
  .component('myPosts', myPosts)
  .component('comments', comments)
  .service('servicePost', servicePost)
  .service('serviceMyPost', serviceMyPost)
  .service('serviceComments', serviceComments)
  .config(route)
