export default class dialogController {
  constructor (Upload, $scope) {
    this.Upload = Upload
    $scope.$watch(() => this.picFile, file => console.log(file))
  }

  test () {
    console.log('test')
  }

  uploadPic (file, data) {
    file.upload = this.Upload.upload({
      method: 'POST',
      url: 'http://localhost:3000/addPost',
      file: file,
      data: data
    })
    .then(res => {
      file.result = res.data
      console.log(file.result)
    })
  }
}
