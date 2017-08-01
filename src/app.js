import angular from 'angular'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import post from './post/post.component'
import posts from './posts/posts.component'
import servicePost from './posts/posts.service'
import 'angular-ui-router'

angular.module('fotoalbum', ['ngMaterial', 'ui.router'])
  .component('posts', posts)
  .component('post', post)
  .service('servicePost', servicePost)
