import * as constants from '../constants';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
