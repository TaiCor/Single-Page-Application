routes.$inject = ['$stateProvider']
export default function routes ($stateProvider) {
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
}
