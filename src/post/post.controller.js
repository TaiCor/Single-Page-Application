export default class postController {
  constructor () {
    this.$onInit = () => {
      this.id = this.params.id
      this.url = this.params.url
      this.title = this.params.title
    }
  }
}
