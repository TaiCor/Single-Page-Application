routes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
export default function routes ($stateProvider, $urlRouterProvider, $locationProvider) {
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
  $urlRouterProvider
    .otherwise('/allposts')
}
