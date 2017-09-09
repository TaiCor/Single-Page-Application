import serviceComments from './comments.service'
import serviceGetCurrentUser from './getcurrentUser.service'
import serviceAuth from './authorization.service'
import wrapper from './wrapper.service'
import servicePosts from './posts.service'
import route from './route.config'

angular.module('serviceModule', [])
.service('servicePosts', servicePosts)
.service('serviceComments', serviceComments)
.service('serviceAuth', serviceAuth)
.service('wrapper', wrapper)
.service('serviceGetCurrentUser', serviceGetCurrentUser)
.config(route)
.run(['serviceGetCurrentUser', (serviceGetCurrentUser) => {
  serviceGetCurrentUser.getCurrentUser()
}])
