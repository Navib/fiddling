import { combineReducers } from 'redux';
import messageReducer from './message';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  message: messageReducer
});

export default rootReducer;
