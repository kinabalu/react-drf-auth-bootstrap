import axios from 'axios';

import { apiUrl, defaultHeaders } from './api';

class AuthApi {

  static getUser(userId) {
    return axios.get(`${apiUrl()}/api/users/${userId}/`, {
      headers: defaultHeaders()
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
        throw(error);
    });
  }

  static getUserFromClaimUrl(urlFragment) {
    return axios.get(`${apiUrl()}/api/claimurl/${urlFragment}`, {
      headers: defaultHeaders()
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw(error);
    });
  }

  static updateUser(user) {
    return axios.patch(`${apiUrl()}/api/users/${user.id}/`, {
      "first_name": user.first_name,
      "last_name": user.last_name
    }, {
      headers: defaultHeaders()
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
        throw(error);
    });
  }

  static login(creds) {
    return axios.post(`${apiUrl()}/api/token-auth/`, {
          "username": creds.username,
          "password": creds.password
        }, {
        headers: defaultHeaders()
      })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        if(error.response.status === 400) {
          throw new Error("Authentication Denied");
        }
        throw(error);
      });
  }

  static register(data) {
    return axios.post(`${apiUrl()}/api/signup/`, {
      "first_name": data.first_name,
      "last_name": data.last_name,
      "email": data.username,
      "password": data.password
    }, {
      headers: defaultHeaders()
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw(error);
    });
  }

  static forgotPasswordRequest(data) {
    return axios.post(`${apiUrl()}/api/password/reset/`, {
      "email": data.email,
    }, {
      headers: defaultHeaders()
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw(error);
    });
  }

  static verifyForgotPasswordCode(data) {
    return axios.get(`${apiUrl()}/api/password/reset/verify/`, {
      params: {
        'code': data.resetCode
      },
      headers: defaultHeaders()
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw(error);
    });
  }

  static resetPasswordWithCode(data) {
    return axios.post(`${apiUrl()}/api/password/reset/verified/`, {
      "code": data.resetCode,
      "password": data.password,
    }, {
      headers: defaultHeaders()
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw(error);
    });
  }

  static changePassword(data) {
    return axios.post(`${apiUrl()}/api/password/change/`, {
      "password": data.password,
    }, {
      headers: defaultHeaders()
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw(error);
    });
  }


  static verifyRegisterUser(data) {

    return axios.get(`${apiUrl()}/api/signup/verify/`, {
      params: {
        'code': data.signupCode
      },
      headers: defaultHeaders()
    })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      throw(error);
    });
  }
}

export default AuthApi;
