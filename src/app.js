import angular from 'angular'
import 'angular-ui-router'
import 'ng-file-upload'
import './style.css'
import 'angular-material'
import 'angular-material/angular-material.min.css'
import 'angular-material-icons'
import 'angular-messages'
import './posts/posts.module'
import './comments/comments.module'
import './auth/auth.module'
import './services/service.module'
import route from './route.config'
import toolbar from './toolbar/toolbar.component'

angular.module('fotoalbum', ['ngMaterial', 'ui.router', 'ngFileUpload', 'ngMdIcons', 'ngMessages', 'postsModule', 'commentsModule', 'authModule', 'serviceModule'])
  .component('toolbar', toolbar)
  .config(route)
