import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../actions/loginActions';
import { Link } from 'react-router';

import { Grid, Row, Col, Panel } from 'react-bootstrap';
import Spinner from 'react-spinkit';
// import VerifyRegister from '../components/VerifyRegister.js';

class VerifyRegisterContainer extends React.Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  componentWillMount() {
    this.props.verifyRegisterUser({signupCode: this.props.signupCode});
  }

  render()  {
    const { registrationVerifying, registrationVerified } = this.props;

    return (

        <Grid fluid>
          <Row>
            <Col md={4}>&nbsp;</Col>
            <Col md={4}>
              <Panel>
                <div className="text-center"><h3>Registration Verification</h3></div>
                <p>&nbsp;</p>

                { registrationVerifying && !registrationVerified &&
                <Spinner spinnerName="double-bounce" />
                }
                { registrationVerified &&
                  <p>Congratulations, verification complete.  Please <Link to="/login">login</Link>.</p>
                }
              </Panel>
            </Col>
            <Col md={4}>&nbsp;</Col>
          </Row>
        </Grid>
    );
  }

}

VerifyRegisterContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

VerifyRegisterContainer.propTypes = {
  verifyRegisterUser: PropTypes.func.isRequired,
  signupCode: PropTypes.string.isRequired,
  registrationVerifying: PropTypes.bool,
  registrationVerified: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return {
    verifyRegisterUser: function(signupCode){ return dispatch(loginActions.verifyRegisterUser(signupCode)); },
  };
}

function mapStateToProps(state) {
  return {
    registrationVerifying: state.auth.registrationVerifying,
    registrationVerified: state.auth.registrationVerified
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyRegisterContainer);
