const initialState = {
  feed: null,
  isLoading: false,
  isError: false,
  isSuccess: false
}

export const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FEED':
      return {
        ...state,
        feed: action.payload
      }

    default:
      return {
        ...state
      }
  }
}
