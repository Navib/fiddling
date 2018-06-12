import { GOT_MESSAGES } from '../actions';

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case GOT_MESSAGES:
      return [action.message.payload, ...state];
    default:
      return state;
  }
};

export default messageReducer;
