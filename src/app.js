import angular from 'angular'
import 'angular-material'
import 'angular-material/angular-material.min.css'
// import './photos.component/photos.module'
import './style.css'
import phoneCatComponent from './phone.cat/phone.cat.component'

// angular.module('fotoalbum', ['ngMaterial', 'photosModule'])
angular.module('phoneCat', ['ngMaterial'])
.component('phonecatcomponent', phoneCatComponent)