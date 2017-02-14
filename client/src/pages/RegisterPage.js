import React, {PropTypes} from 'react';

import HeaderContainer from '../containers/HeaderContainer.js';
import RegisterFormContainer from '../containers/RegisterFormContainer.js';

const RegisterPage = (props) => {

  const notice = props.location.query.notice;
  return (
    <div>
      <HeaderContainer />

      <RegisterFormContainer notice={notice}/>
    </div>
  );
};

RegisterPage.propTypes = {
  location: PropTypes.object
};

export default RegisterPage;
