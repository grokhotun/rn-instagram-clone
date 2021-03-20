import {$api} from 'src/api'

const setFeed = (payload) => ({
  type: 'SET_FEED',
  payload
})

const getFeed = () => async (dispatch) => {
  const data = await $api.getFeed()
  dispatch(setFeed(data))
}

export {
  getFeed
}
