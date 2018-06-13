import { CHANGED_AUTH } from '../actions';

const authReducer = (state = false, action) => {
  switch (action.type) {
    case CHANGED_AUTH:
      return action.logged.payload;
    default:
      return state;
  }
};

export default authReducer;
