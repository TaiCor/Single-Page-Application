import angular from 'angular'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import post from './post/post.component'
import posts from './posts/posts.component'

angular.module('fotoalbum', ['ngMaterial'])
  .component('posts', posts)
  .component('post', post)
