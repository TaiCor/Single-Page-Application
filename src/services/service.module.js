import serviceComments from './comments.service'
import serviceGetCurrentUser from './getcurrentUser.service'
import serviceAuth from './authorization.service'
import wrapper from './wrapper.service'
import servicePosts from './posts.service'

angular.module('serviceModule', [])
.service('servicePosts', servicePosts)
.service('serviceComments', serviceComments)
.service('serviceAuth', serviceAuth)
.service('wrapper', wrapper)
.service('serviceGetCurrentUser', serviceGetCurrentUser)
.run(['serviceGetCurrentUser', (serviceGetCurrentUser) => {
  serviceGetCurrentUser.getCurrentUser()
}])
