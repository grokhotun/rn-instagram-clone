import {createStore, combineReducers} from 'redux'
import {postReducer} from './reducers/post'
import {userReducer} from './reducers/user'

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer
})

export default createStore(rootReducer)
