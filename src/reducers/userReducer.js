import * as constants from '../constants';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case constants.SET_USER:
      return action.user;
    default:
      return state;
  }
};

export const hello = 'hello';
