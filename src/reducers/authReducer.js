import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../config/types';

const init = {
    isFetching: false,
    isLoggedIn: true,
    // didInvalidate: false,
    // items: []
};

export default function(state = init, action) {
    switch(action.type) {
      case LOGIN_REQUEST:
        return Object.assign({}, state, { isFetching: true });
      case LOGIN_SUCCESS:
      case LOGIN_FAILURE:
        return Object.assign({}, state, { isFetching: false, ...action.payload });
      default:
        return state;
    }
}
