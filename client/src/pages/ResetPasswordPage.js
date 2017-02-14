import React, {PropTypes} from 'react';

import ResetPasswordContainer from '../containers/ResetPasswordContainer';
import HeaderContainer from '../containers/HeaderContainer';

const ResetPasswordPage = (props) => {

  return (
    <div className="container">
      <HeaderContainer />
      <ResetPasswordContainer resetCode={props.params.resetCode} />
    </div>
  );
};

ResetPasswordPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default ResetPasswordPage;
