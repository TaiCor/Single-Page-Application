import comments from '../jsons/comments.json'

export default class commentService {
  constructor ($q) {
    this.$q = this.$q
  }
  getComments () {
    return this.$q.when(comments)
  }
}
