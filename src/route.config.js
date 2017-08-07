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
  $urlRouterProvider
    .otherwise('/allposts')
}
