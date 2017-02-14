import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { Link } from 'react-router';

import * as loginActions from '../actions/loginActions';
import * as status from '../constants/status';

import { Grid, Row, Col, Panel } from 'react-bootstrap';

import Spinner from 'react-spinkit';
import ResetPasswordForm from '../components/ResetPasswordForm.js';

class ResetPasswordContainer extends React.Component {

  // constructor(props, context) {
  //   super(props, context);
  // }

  componentWillMount() {
    this.props.actions.verifyForgotPasswordCode(this.props.resetCode);
  }

  handleSubmit(values) {
    this.props.actions.resetPasswordWithCode(values.password, this.props.resetCode);
  }

  render()  {
    const { verified, success } = this.props;

    if(!verified && !success) {
      return (
        <Spinner spinnerName="double-bounce" />
      );
    }

    return (

        <Grid fluid>
          <Row>
            <Col md={2}>&nbsp;</Col>
            <Col md={8}>
              <Panel>
                <div className="text-center"><h3>Reset Password</h3></div>

                <p>&nbsp;</p>

                { !success &&
                  <div>
                    <p>Enter your new password in the form below</p>

                    <ResetPasswordForm onSubmit={this.handleSubmit.bind(this)}/>
                  </div>
                }
                { success &&
                  <p>
                    Reset password has been successful!
                    Please <Link to="/login">login</Link> to your account now.
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

ResetPasswordContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

ResetPasswordContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  resetCode: PropTypes.string,
  verified: PropTypes.bool,
  success: PropTypes.bool
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
};

function mapStateToProps(state) {
  return {
    verified: state.requestStatus.auth.status === status.VERIFIED,
    success: state.requestStatus.auth.status === status.SUCCESS
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordContainer);
