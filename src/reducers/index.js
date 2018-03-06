import { combineReducers } from 'redux';
import authReducer from './authReducer';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  auth: authReducer,
  router: routerReducer
});
