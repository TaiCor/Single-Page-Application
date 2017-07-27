import angular from 'angular'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import './component.photos/module.photos'
import './style.css'

angular.module('fotoalbum', ['ngMaterial', 'photosModule'])
