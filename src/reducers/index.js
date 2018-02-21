import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './userReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  router: routerReducer,
  user: userReducer,
  messages: messageReducer,
});
