import angular from 'angular'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import './photos.component/photos.module'
import './style.css'

angular.module('fotoalbum', ['ngMaterial', 'photosModule'])
