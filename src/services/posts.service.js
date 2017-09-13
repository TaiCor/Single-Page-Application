export default class postsService {
  constructor (wrapper, Upload) {
    this.wrapper = wrapper
    this.Upload = Upload
  }
  getPosts () {
    return this.wrapper.wrap('getAllPhotos', 'GET')
  }

  getMyPosts () {
    return this.wrapper.wrap('getUserPhotos', 'GET')
  }

  deletePost (photoId) {
    return this.wrapper.wrap('deletePhotoById', 'POST', {photoId})
  }

  editPost (photoId, title, description) {
    return this.wrapper.wrap('changePhoto', 'POST', {photoId, title, description})
  }

  addPost (postPic, postTitle, postDescription) {
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

  changeUser (login, name) {
    return this.wrapper.wrap('changeUser', 'POST', {login, name})
  }

  changePassword (oldPassword, newPassword) {
    return this.wrapper.wrap('changePassword', 'POST', {oldPassword, newPassword})
  }
}
