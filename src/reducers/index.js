import { combineReducers } from 'redux';
import messageReducer from './message';
import authReducer from './auth';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  message: messageReducer,
  auth: authReducer
});

export default rootReducer;
