import React, {PropTypes} from 'react';

import ForgotPasswordContainer from '../containers/ForgotPasswordContainer';
import HeaderContainer from '../containers/HeaderContainer';

const ForgotPasswordPage = (props) => {

  return (
    <div className="container">
      <HeaderContainer />
      <ForgotPasswordContainer signupCode={props.params.signupCode} />
    </div>
  );
};

ForgotPasswordPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default ForgotPasswordPage;
