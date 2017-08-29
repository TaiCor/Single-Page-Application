export default class dialogController {
  constructor (Upload, $scope, $mdDialog) {
    this.Upload = Upload
    $scope.$watch(() => this.picFile, file => console.log(file))
    this.data = {}
    this.$mdDialog = $mdDialog
  }

  test () {
    console.log('test')
  }

  uploadPic () {
    this.Upload.upload({
      method: 'POST',
      url: 'http://localhost:3000/addPost',
      withCredentials: true,
      data: {
        title: this.data.title,
        description: this.data.description,
        file: this.picFile
      }
    })
    .then(res => {
      console.log(res.data)
      this.$mdDialog.hide(res.data)
    })
  }
}
