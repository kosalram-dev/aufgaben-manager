import { combineReducers } from 'redux';
import userReducer from './userReducer';
import taskReducer from './taskReducer';

const appReducer = combineReducers({
  user: userReducer,
  task: taskReducer
});

export default appReducer;
