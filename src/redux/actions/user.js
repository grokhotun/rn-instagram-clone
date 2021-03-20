import {$api} from 'src/api'

const setUser = (payload) => ({
  type: 'SET_USER',
  payload
})


const signInUser = (email, password) => async (dispatch) => {
  const user = await $api.signIn(email, password)
  dispatch(setUser(user))
}

const signUpUser = (email, password) => async (dispatch) => {
  const user = await $api.signUp(email, password)
  dispatch(setUser(user))
}

const signOutUser = () => async (dispatch) => {
  await $api.signOut()
  dispatch(setUser(null))
}

export {
  signInUser,
  signUpUser,
  signOutUser
}
