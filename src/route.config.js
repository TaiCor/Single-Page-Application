routes.$inject = ['$stateProvider', '$urlRouterProvider']
export default function routes ($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('allposts', {
      url: '/allposts',
      component: 'posts'
    })
  $stateProvider
    .state('myposts', {
      url: '/myposts',
      component: 'myPosts'
    })
  $stateProvider
    .state('login', {
      url: '/login',
      component: 'login'
    })
  $stateProvider
    .state('singup', {
      url: '/singup',
      component: 'singup'
    })
  $urlRouterProvider
    .otherwise('/allposts')
}
