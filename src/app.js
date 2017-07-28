import angular from 'angular'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import './post.module'
import './style.css'

angular.module('fotoalbum', ['ngMaterial', 'post.module'])
