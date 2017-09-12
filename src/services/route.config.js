routes.$inject = ['$stateProvider', '$urlRouterProvider']
export default function routes ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('allposts', {
      url: '/allposts',
      component: 'allposts'
    })
    .state('myposts', {
      url: '/myposts',
      component: 'myPosts'
    })
    .state('login', {
      url: '/login',
      component: 'login'
    })
    .state('singup', {
      url: '/singup',
      component: 'singup'
    })
    .state('profile', {
      url: '/profile',
      component: 'profile'
    })
  $urlRouterProvider
    .otherwise('/allposts')
}
