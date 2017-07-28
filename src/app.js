import angular from 'angular'
import 'angular-material'
import 'angular-material/angular-material.min.css'

import photos from './posts/posts.component'

angular.module('fotoalbum', ['ngMaterial'])
  .component('photos', photos)
