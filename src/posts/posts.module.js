import mypost from './mypost/mypost.component'
import allposts from './allposts/allposts.component'
import myPosts from './myposts/myposts.component'
import allpost from './allpost/allpost.component'

angular.module('postsModule', [])
  .component('allposts', allposts)
  .component('mypost', mypost)
  .component('myPosts', myPosts)
  .component('allpost', allpost)
