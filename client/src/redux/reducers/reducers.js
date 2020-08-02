import { combineReducers } from 'redux'
import user from './reducerUser'
import lists from './reducerLists'

const reducers = combineReducers({
  user,
  lists
});

export default reducers;