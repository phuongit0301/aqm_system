import axios from 'axios';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../config/types';

const loginRequest = () => {
  return { type: LOGIN_REQUEST }
}

const loginSuccess = (payload) => {
  return { type: LOGIN_SUCCESS, payload }
}

const loginFailure = (error) => {
  return { type: LOGIN_FAILURE, error }
}

export const fetchUser = () => dispatch => {
  try {

    dispatch(loginRequest());

    // const response = await axios.get('/api/v1/me?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTlhZDJmMDEyMTgwZjgzYjQ2ODhiOTMiLCJwcm9maWxlIjp7Im5hbWUiOiJwaHVvbmdwdCIsInBpY3R1cmUiOiIifSwiaGlzdG9yeSI6W10sInBhc3N3b3JkIjoiJDJhJDEwJEcxU0Q5ZFFKZndUQ0ZDNWF0T3A4OE9rcTlVM0tkaEluT3dueGhoZi43VjZiUVREQ0VnN0pHIiwiZW1haWwiOiJwaHVvbmdwdDAzMDFAZ21haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpc0VtYWlsVmVyaWZpZWQiOmZhbHNlLCJfX3YiOjAsImlhdCI6MTUyMDA5NzYwNiwiZXhwIjoxNTIwMDk5MDQ2fQ.KaiBmXqBFzS3fZrIfSIs9KoeJI7RihkZMrfXIdC8o8w');
    const response = {
      data: {
        isLoggedIn: true,
      }
    }
    return dispatch(loginSuccess(response.data));
  } catch( error ) {
    return dispatch(loginFailure({ payload: error }));
  }

};
