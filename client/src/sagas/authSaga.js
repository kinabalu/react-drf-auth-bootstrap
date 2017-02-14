import { takeEvery, delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as types from '../constants/actionTypes';
import * as status from '../constants/status';

import authApi from '../api/authApi';
// import { push } from 'react-router-redux';

export function* currentUserRequest() {
  try {
    const userId = localStorage.getItem('userId');
    const user = yield call(authApi.getUser, userId);
    yield put({type: 'CURRENT_USER_SUCCESS', user});
  } catch(error) {
    yield put({type: 'CURRENT_USER_ERROR', message: error});
  }
}

export function* loadUserRequest({userId}) {
  try {
    const user = yield call(authApi.getUser, userId);
    yield put({type: 'LOAD_USER_SUCCESS', user});
  } catch(error) {
    yield put({type: 'LOAD_USER_ERROR', message: error});
  }
}

export function* updateProfileRequest({user}) {
  try {
    yield call(authApi.updateUser, user);

    yield put({type: 'UPDATE_PROFILE_SUCCESS', user});
  } catch(error) {
    yield put({type: 'UPDATE_PROFILE_FAILURE', message: error});
  }
}

export function* verifyRegisterRequest({signupCode}) {
  try {
    yield call(authApi.verifyRegisterUser, signupCode);

    yield put({type: 'VERIFY_REGISTER_SUCCESS'});
  } catch(error) {
    yield put({type: 'VERIFY_REGISTER_FAILURE', message: error});
  }
}

export function* registerRequest({registration}) {
  try {
    const user = yield call(authApi.register, registration);

    yield put({type: 'REGISTER_SUCCESS', user});
  } catch(error) {
    yield put({type: 'REGISTER_ERROR', message: error});
  }
}

export function* loginRequest({username, password}) {
  try {
    const user = yield call(authApi.login, {
      username,
      password
    });
    localStorage.setItem('loginToken', user.token);
    // localStorage.setItem('group', user.group);
    localStorage.setItem('username', username);
    localStorage.setItem('userId', user.userId);

    user.username = username;

    yield put({type: 'LOGIN_SUCCESS', user});
  } catch(error) {
    localStorage.removeItem('loginToken');
    // localStorage.removeItem('group');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    yield put({type: 'LOGIN_FAILURE', message: error});
    yield call(delay, 5000);
    yield put({type: 'LOGIN_FAILURE', message: null});
  }
}

export function* logoutRequest() {
  try {
    localStorage.removeItem('loginToken');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    yield put({ type: 'LOGOUT_SUCCESS' });
  } catch(error) {
    yield put({type: 'LOGOUT_ERROR', message: error});
  }
}

export function* requestForgotPassword({email}) {
  try {
    yield put({type: types.UPDATE_STATUS, auth: { status: status.REQUESTING } });
    yield call(authApi.forgotPasswordRequest, {email});
    yield put({type: types.UPDATE_STATUS, auth: { status: status.REQUESTED } });
  } catch(error) {
    yield put({type: types.UPDATE_STATUS, message: error, auth: { status: status.ERROR } });
  }
}

export function* verifyForgotPasswordCode({resetCode}) {
  try {
    yield put({type: types.UPDATE_STATUS, auth: { status: status.VERIFYING } });
    yield call(authApi.verifyForgotPasswordCode, {resetCode});
    yield put({type: types.UPDATE_STATUS, auth: { status: status.VERIFIED } });
    yield put({ type: 'VERIFY_FORGOT_PASSWORD_CODE_SUCCESS' });
  } catch(error) {
    yield put({type: types.UPDATE_STATUS, message: error, auth: { status: status.ERROR } });
  }
}

export function* resetPasswordWithCode({password, resetCode}) {
  try {
    yield put({type: types.UPDATE_STATUS, auth: { status: status.RESETTING } });
    yield call(authApi.resetPasswordWithCode, {password, resetCode});
    yield put({type: types.UPDATE_STATUS, auth: { status: status.SUCCESS } });
  } catch(error) {
    yield put({type: types.UPDATE_STATUS, message: error, auth: { status: status.ERROR } });
  }
}

export function* changePassword({password}) {
  try {
    yield put({type: types.UPDATE_STATUS, auth: { status: status.UPDATING } });
    yield call(authApi.changePassword, {password});
    yield put({type: types.UPDATE_STATUS, auth: { status: status.UPDATED } });
  } catch(error) {
    yield put({type: types.UPDATE_STATUS, message: error, auth: { status: status.ERROR } });
  }
}

export function* watchChangePassword() {
  yield* takeEvery(types.CHANGE_PASSWORD, changePassword);
}

export function* watchRequestForgotPassword() {
  yield* takeEvery(types.REQUEST_FORGOT_PASSWORD, requestForgotPassword);
}

export function* watchVerifyForgotPasswordCode() {
  yield* takeEvery(types.VERIFY_FORGOT_PASSWORD_CODE, verifyForgotPasswordCode);
}

export function* watchResetPasswordWithCode() {
  yield* takeEvery(types.RESET_PASSWORD_WITH_CODE, resetPasswordWithCode);
}

export function* watchCurrentUserRequest() {
  yield* takeEvery(types.CURRENT_USER_REQUEST, currentUserRequest);
}

export function* watchLoadUserRequest() {
  yield* takeEvery(types.LOAD_USER_REQUEST, loadUserRequest);
}

export function* watchUpdateProfileRequest() {
  yield* takeEvery(types.UPDATE_PROFILE_REQUEST, updateProfileRequest);
}

export function* watchLoginRequest() {
  yield* takeEvery(types.LOGIN_REQUEST, loginRequest);
}

export function* watchLogoutRequest() {
  yield* takeEvery(types.LOGOUT_REQUEST, logoutRequest);
}

export function* watchRegisterRequest() {
  yield* takeEvery(types.REGISTER_REQUEST, registerRequest);
}

export function* watchVerifyRegisterRequest() {
  yield* takeEvery(types.VERIFY_REGISTER_REQUEST, verifyRegisterRequest);
}
