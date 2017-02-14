import * as types from '../constants/actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    // case '@@router/LOCATION_CHANGE':
    //   console.log(action);
    //   console.log(state);
    //   return state;
    case types.CURRENT_USER_REQUEST:
      return {...state,
        loading: true,
        loaded: false,
        user: null
      };
    case types.CURRENT_USER_SUCCESS:
      return {...state,
        loading: false,
        loaded: true,
        user: action.user
      };
    case types.CURRENT_USER_ERROR:
      return {...state,
        loading: false,
        loaded: false,
        error: action.message
      };
    case types.LOAD_USER_REQUEST:
      return {...state,
        loading: true,
        loaded: false,
        loadedUser: null
      };
    case types.LOAD_USER_SUCCESS:
      return {...state,
        loading: false,
        loaded: true,
        loadedUser: action.user
      };
    case types.LOAD_USER_ERROR:
      return {...state,
        loading: false,
        loaded: false,
        loadedUser: null,
        error: action.message
      };
    case types.UPDATE_PROFILE_REQUEST:
      return {...state,
        updating: true,
        updated: false,
        user: null
      };
    case types.UPDATE_PROFILE_SUCCESS:
      return {...state,
        updating: false,
        updated: true,
        user: action.user
      };
    case types.UPDATE_PROFILE_FAILURE:
      return {...state,
        updating: false,
        updated: false,
        error: action.message
      };
    case types.UPDATE_PROFILE_DONE:
      return {...state,
        updating: false,
        updated: false
      };
    case types.LOGIN_REQUEST:
      return {...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      };
    case types.LOGIN_SUCCESS:
      return {...state,
        isFetching: false,
        isAuthenticated: true,
        username: action.user.username,
        userId: action.user.userId,
        error: ''
      };
    case types.LOGIN_FAILURE:
      return {...state,
        isFetching: false,
        isAuthenticated: false,
        error: action.message
      };
    case types.LOGOUT_REQUEST:
      return {...state,
        isFetching: true,
        isAuthenticated: false,
        username: null
      };
    case types.LOGOUT_SUCCESS:
      return {...state,
        isFetching: false,
        isAuthenticated: false
      };
    case types.REGISTER_REQUEST:
      return {...state,
        isFetching: true,
        error: null,
        registrationSuccess: false,
        registration: action.registration
      };
    case types.REGISTER_SUCCESS:
      return {...state,
        isFetching: false,
        registrationSuccess: true,
        error: null
      };
    case types.REGISTER_FAILURE:
      return {...state,
        registrationSuccess: false,
        error: action.message
      };
    case types.REGISTER_DONE:
      return {...state,
        registrationSuccess: null,
        error: null
      };
    case types.VERIFY_REGISTER_REQUEST:
      return {...state,
        registrationVerifying: true,
        registrationVerified: false,
        error: null
      };
    case types.VERIFY_REGISTER_SUCCESS:
      return {...state,
        registrationVerifying: false,
        registrationVerified: true,
        error: null
      };
    case types.VERIFY_REGISTER_FAILURE:
      return {...state,
        registrationVerifying: false,
        registrationVerified: false,
        error: action.message
      };
    case types.CLAIM_USER_DONE:
      return {...state,
        user: action.user
      };
    default:
      return state;
  }
}
