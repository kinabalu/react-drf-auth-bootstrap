import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from '../actions/loginActions';
import * as status from '../constants/status';

import { Grid, Row, Col, Panel } from 'react-bootstrap';

// import Spinner from 'react-spinkit';
import ForgotPasswordForm from '../components/ForgotPasswordForm.js';

class ForgotPasswordContainer extends React.Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  componentWillMount() {
    // this.props.verifyRegisterUser({signupCode: this.props.signupCode});
  }

  handleSubmit(values) {
    this.props.actions.requestForgotPassword(values.email);
  }

  render()  {
    const { forgotRequestSuccess } = this.props;

    return (

        <Grid fluid>
          <Row>
            <Col md={2}>&nbsp;</Col>
            <Col md={8}>
              <Panel>
                <div className="text-center"><h3>Forgot Password</h3></div>

                <p>&nbsp;</p>

                { !forgotRequestSuccess &&
                  <div>
                    <p>Enter the e-mail you used to sign-up for an account.</p>

                    <ForgotPasswordForm onSubmit={this.handleSubmit.bind(this)}/>
                  </div>
                }
                { forgotRequestSuccess &&
                  <p>
                    Request has been sent for the email address entered.  Please
                    check your email and follow the instructions.
                  </p>
                }
              </Panel>
            </Col>
            <Col md={2}>&nbsp;</Col>
          </Row>
        </Grid>
    );
  }

}

ForgotPasswordContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

ForgotPasswordContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  forgotRequestSuccess: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
};

function mapStateToProps(state) {
  return {
    forgotRequestSuccess: state.requestStatus.auth.status === status.REQUESTED
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
