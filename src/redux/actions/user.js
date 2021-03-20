import {$api} from 'src/api'

const setUser = (payload) => ({
  type: 'SET_USER',
  payload
})


const signInUser = (email, password) => async (dispatch) => {
  const user = await $api.signIn(email, password)
  dispatch(setUser(user))
}

export {
  signInUser
}
