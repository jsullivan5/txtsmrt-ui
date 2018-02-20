import environment from '../environment';
import * as constants from '../constants';

export const setUser = user => (
  { type: constants.SET_USER, user }
);

export const userSignup = user => (
  (dispatch) => {
    fetch(`${environment.apiUrl}/user/signup`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setUser(data));
      })
      .catch(error => console.error(error));
  }
);

export const userLogin = user => (
  (dispatch) => {
    fetch(`${environment.apiUrl}/user/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setUser(data));
      })
      .catch(error => console.error(error));
  }
);
