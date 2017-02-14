import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ReactGA from 'react-ga';

import * as loginActions from '../actions/loginActions';

import { Alert, Grid, Row, Col, Panel } from 'react-bootstrap';
import RegisterForm from '../components/RegisterForm.js';

class RegisterFormContainer extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleRegister = this.handleRegister.bind(this);
  }

  componentWillUnmount() {
    this.props.registerUserDone();
    ReactGA.event({
      category: 'User',
      action: 'Register Success'
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.registrationSuccess) {
  //
  //     this.context.router.push('/');
  //   }
  // }

  handleRegister = (values) => {
    this.props.registerUser(values);
    ReactGA.event({
      category: 'User',
      action: 'Register Request',
      label: `${values.username}`
    });

  }

  render()  {
    const { registrationSuccess, notice } = this.props;

    return (

        <Grid fluid>
          { (notice === 'feature' ) &&
          <Row>
            <Col md={4}>&nbsp;</Col>
            <Col md={4}>
              <Alert>
              In order to access that feature of Rolodex, you need to <strong>create an account</strong> first.
              </Alert>
            </Col>
            <Col md={4}>&nbsp;</Col>
          </Row>
          }
          <Row>
            <Col md={12}><p>&nbsp;</p></Col>
          </Row>
          <Row>
            <Col md={4}>&nbsp;</Col>
            <Col md={4}>
              <Panel>
                <div className="text-center"><h3>Rolodex Registration</h3></div>
                <p>&nbsp;</p>

                { !registrationSuccess &&
                <RegisterForm
                  onSubmit={this.handleRegister}
                  handleRegister={this.handleRegister}
                  handleKeyPress={this.handleKeyPress}
                  />
                }
                { registrationSuccess &&
                <p>
                  Registration was successful, please check your email and click
                  on the validation link.
                </p>
                }
              </Panel>
            </Col>
            <Col md={4}>&nbsp;</Col>
          </Row>
        </Grid>
    );
  }

}

RegisterFormContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

RegisterFormContainer.propTypes = {
  registerUser: PropTypes.func.isRequired,
  registerUserDone: PropTypes.func.isRequired,
  registrationSuccess: PropTypes.bool,
  notice: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    registerUser: function(creds){ return dispatch(loginActions.registerUser(creds)); },
    registerUserDone: function() { return dispatch(loginActions.registerUserDone()); }
  };
}

function mapStateToProps(state) {
  return {
    registrationSuccess: state.auth.registrationSuccess,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormContainer);
