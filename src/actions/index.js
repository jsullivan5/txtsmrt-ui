import environment from '../environment';
import * as constants from '../constants';

export const setUser = user => (
  { type: constants.SET_USER, user }
);

const fetchUser = (endpoint, options) => (
  (dispatch) => {
    fetch(`${environment.apiUrl}${endpoint}`, options)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        dispatch(setUser(data));
      })
      .catch(error => console.error(error));
  }
);

export const userSignup = user => (
  fetchUser('/user/signup', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
);

export const getUser = () => (
  fetchUser('/user/login', {
    method: 'GET',
    credentials: 'include',
  })
);

export const userLogin = user => (
  fetchUser('/user/login', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
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
