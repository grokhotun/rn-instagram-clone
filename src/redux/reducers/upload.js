const initialState = {
  image: null,
  progress: 0,
  isSuccess: false,
  isError: false,
  isUploading: false,
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROGRESS':
      return {
        ...state,
        progress: action.payload
      }
    case 'SET_IS_SUCCESS':
      return {
        ...state,
        isSuccess: action.payload
      }
    case 'SET_IS_ERROR':
      return {
        ...state,
        isError: action.payload
      }
    case 'SET_IS_UPLOADING':
      return {
        ...state,
        isUploading: action.payload
      }
    default:
      return {
        ...state
      }
  }
}
