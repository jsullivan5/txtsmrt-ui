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

export const getUser = () => (
  (dispatch) => {
    fetch(`${environment.apiUrl}/user/login`, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then((user) => {
        console.log(user);
        dispatch(setUser(user));
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

export const userLogout = () => (
  (dispatch) => {
    fetch(`${environment.apiUrl}/user/logout`, {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => {
        console.log(response);
        dispatch(setUser({ }));
        document.cookie =
          'connect.sid=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      })
      .catch(error => console.error(error));
  }
);
