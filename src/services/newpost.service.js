export default class newpost {
  constructor (Upload) {
    this.Upload = Upload
  }
  uploadPic (postPic, postTitle, postDescription) {
    return this.Upload.upload({
      method: 'POST',
      url: 'http://localhost:3000/addPost',
      withCredentials: true,
      data: {
        title: postTitle,
        description: postDescription,
        file: postPic
      }
    })
  }
}
