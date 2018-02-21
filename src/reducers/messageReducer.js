import * as constants from '../constants';

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case constants.SET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
};

export default messageReducer;
