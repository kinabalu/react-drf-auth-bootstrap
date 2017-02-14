import * as types from '../constants/actionTypes';

export function currentUser() {
  return { type: types.CURRENT_USER_REQUEST };
}

export function loginUser(creds) {
  return { type: types.LOGIN_REQUEST, username: creds.username, password: creds.password };
}

export function loadUser(userId) {
  return { type: types.LOAD_USER_REQUEST, userId };
}

// Logs the user out
export function logoutUser() {
  return { type: types.LOGOUT_REQUEST };
}

export function registerUser(registration) {
  return { type: types.REGISTER_REQUEST, registration };
}

export function registerUserDone() {
  return { type: types.REGISTER_DONE };
}

export function verifyRegisterUser(signupCode) {
  return { type: types.VERIFY_REGISTER_REQUEST, signupCode };
}

export function updateProfile(user) {
  return { type: types.UPDATE_PROFILE_REQUEST, user };
}

export function updateProfileDone() {
  return { type: types.UPDATE_PROFILE_DONE };
}

export function retrieveClaimUser(urlFragment) {
  return { type: types.RETRIEVE_CLAIM_USER, urlFragment };
}

export function requestForgotPassword(email) {
  return { type: types.REQUEST_FORGOT_PASSWORD, email };
}

export function verifyForgotPasswordCode(resetCode) {
  return { type: types.VERIFY_FORGOT_PASSWORD_CODE, resetCode };
}

export function resetPasswordWithCode(password, resetCode) {
  return { type: types.RESET_PASSWORD_WITH_CODE, password, resetCode };
}

export function changePassword(password) {
  return { type: types.CHANGE_PASSWORD, password };
}
