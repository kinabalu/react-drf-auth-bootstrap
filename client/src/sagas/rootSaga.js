import {
  watchCurrentUserRequest,
  watchLoginRequest,
  watchLoadUserRequest,
  watchLogoutRequest,
  watchRegisterRequest,
  watchVerifyRegisterRequest,
  watchUpdateProfileRequest,
  watchRequestForgotPassword,
  watchVerifyForgotPasswordCode,
  watchResetPasswordWithCode,
  watchChangePassword,
} from './authSaga';

export default function* rootSaga() {
  yield [
    // Login Actions
    watchCurrentUserRequest(),
    watchLoadUserRequest(),
    watchLoginRequest(),
    watchLogoutRequest(),
    watchRegisterRequest(),
    watchVerifyRegisterRequest(),
    watchUpdateProfileRequest(),
    watchRequestForgotPassword(),
    watchVerifyForgotPasswordCode(),
    watchResetPasswordWithCode(),
    watchChangePassword(),
  ];
}
