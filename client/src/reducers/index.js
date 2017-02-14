import { combineReducers } from 'redux';
// import * as types from '../constants/actionTypes';

import auth from './authReducer';
// import entities from './entities';
import requestStatusReducer from './requestStatus';
import {routerReducer} from 'react-router-redux';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth,
  // entities,
  requestStatus: requestStatusReducer,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
