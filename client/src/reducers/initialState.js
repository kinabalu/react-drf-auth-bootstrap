export default {
  requestStatus: {
  },
  entities: {
  },
  auth: {
    isFetching: false,
    isAuthenticated: localStorage.getItem('loginToken') ? true : false,
    registrationVerified: false,
    registrationVerifying: false,
    username: localStorage.getItem('username') ? localStorage.getItem('username') : null,
    userId: localStorage.getItem('userId') ? localStorage.getItem('userId') : null    
  },
};
