import React, {PropTypes} from 'react';

import VerifyRegisterContainer from '../containers/VerifyRegisterContainer';
import HeaderContainer from '../containers/HeaderContainer';

const VerifyRegisterPage = (props) => {

  return (
    <div className="container">
      <HeaderContainer />
      <VerifyRegisterContainer signupCode={props.params.signupCode} />
    </div>
  );
};

VerifyRegisterPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default VerifyRegisterPage;
