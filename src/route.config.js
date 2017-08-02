import allPostComponent from './posts/posts.component'
import myPostsComponent from './myposts/myposts.component'

routes.$inject = ['$stateProvider']
export default function routes ($stateProvider) {
  $stateProvider
    .state('allposts', {
      url: '/allposts',
      component: allPostComponent
    })
    .state('myposts', {
      url: '/myposts',
      component: myPostsComponent
    })
}
