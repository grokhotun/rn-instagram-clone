import {$api} from 'src/api'

const setProgress = (payload) => ({
  type: 'SET_PROGRESS',
  payload
})

const setIsSuccess = (payload) => ({
  type: 'SET_IS_SUCCESS',
  payload
})

const setIsError = (payload) => ({
  type: 'SET_IS_ERROR',
  payload
})

const setIsUploading = (payload) => ({
  type: 'SET_IS_UPLOADING',
  payload
})

const uploadPhoto = (user, photo) => async (dispatch) => {
  const task = $api.uploadPhoto(user, photo)
  const taskProgress = (snapshot) => {
    const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    console.log(`progress: ${percentage} %`)
    dispatch(setProgress(percentage))
  }
  const taskError = (error) => {
    dispatch(setIsError(true))
    console.log('error', error)
  }
  const taskCompleted = async () => {
    dispatch(setIsSuccess(true))
    dispatch(setIsUploading(false))
    dispatch(setIsError(false))
    const url = await task.snapshot.ref.getDownloadURL()
    console.log('done', url)
  }
  dispatch(setIsUploading(true))
  task.on('state-change', taskProgress, taskError, taskCompleted)
}

export {
  uploadPhoto
}
