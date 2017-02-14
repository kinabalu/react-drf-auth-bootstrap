import React, {PropTypes} from 'react';

import HeaderContainer from '../containers/HeaderContainer.js';
import LoginFormContainer from '../containers/LoginFormContainer.js';

const LoginPage = (props) => {

  const notice = props.location.query.notice;

  return (
    <div>
      <HeaderContainer />
      <LoginFormContainer notice={notice} />
    </div>
  );
};

LoginPage.propTypes = {
  location: PropTypes.object
};

export default LoginPage;
