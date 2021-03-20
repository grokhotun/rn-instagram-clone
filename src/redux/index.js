import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import {userReducer} from './reducers/user'
import {feedReducer} from './reducers/feed'

export default createStore(combineReducers({
  userState: userReducer,
  feedState: feedReducer
}), applyMiddleware(thunk))
