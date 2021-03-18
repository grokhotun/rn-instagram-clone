import {createStore, combineReducers} from 'redux'
import {postReducer, userReducer} from './reducers/post'

const rootReducer = combineReducers({
  post: postReducer,
  user: userReducer
})

export default createStore(rootReducer)
