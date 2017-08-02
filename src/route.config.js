import allPostComponent from './posts/posts.component'
import myPostsComponent from './myposts/myposts.component'

routes.$inject = ['$stateProvider']
export default function routes ($stateProvider) {
  $stateProvider
    .state('allPosts', {
      url: '/allposts',
      component: allPostComponent
    })
    .state('myPosts', {
      url: '/myposts',
      component: myPostsComponent
    })
}
