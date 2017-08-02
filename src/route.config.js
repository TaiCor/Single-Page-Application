import allpostComponent from './posts/posts.component'

routes.$inject = ['$stateProvider']
export default function routes ($stateProvider) {
  $stateProvider
    .state('allPosts', {
      url: '/allposts',
      component: allpostComponent
    })
}
