import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import DashboardPage from './pages/DashboardPage';
// import AboutPage from './pages/AboutPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterPage from './pages/RegisterPage.js';
import VerifyRegisterPage from './pages/VerifyRegisterPage.js';
import ForgotPasswordPage from './pages/ForgotPasswordPage.js';
import ResetPasswordPage from './pages/ResetPasswordPage.js';
// import MyProfilePage from './pages/MyProfilePage.js';
import NotFoundPage from './pages/NotFoundPage.js';

// function requireAuth(nextState, replace) {
//   if(!localStorage.getItem("loginToken")) {
//     replace({
//       pathname: '/login',
//       query: { notice: 'restricted' },
//       state: { nextPathname: nextState.location.pathname }
//     });
//   }
// }

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage}/>
    <Route path="login" component={LoginPage}/>
    <Route path="register" component={RegisterPage}/>
    <Route path="forgot" component={ForgotPasswordPage}/>
    <Route path="register/verify/:signupCode" component={VerifyRegisterPage} />
    <Route path="reset/password/:resetCode" component={ResetPasswordPage} />
    {/*
    <Route path="about" component={AboutPage}/>
    <Route path="myprofile" component={MyProfilePage} onEnter={requireAuth} />
    */}
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
