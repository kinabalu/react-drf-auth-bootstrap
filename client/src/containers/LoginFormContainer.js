import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as loginActions from '../actions/loginActions';
import ReactGA from 'react-ga';

import { Link } from 'react-router';

import { Grid, Row, Col, Panel, Alert } from 'react-bootstrap';

import LoginForm from '../components/LoginForm';

class LoginFormContainer extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.errorMessage && nextProps.isAuthenticated) {
      this.context.router.push('/');
      ReactGA.event({
        category: 'User',
        action: 'Login Successful'
      });
      return;
    }

    if(nextProps.errorMessage) {
      this.setState({
        password: ''
      });
      ReactGA.event({
        category: 'User',
        action: 'Login Error'
      });

    }
  }

  handleLogin = (values) => {
    this.props.loginUser(values);
    ReactGA.event({
      category: 'User',
      action: 'Login Request',
      label: `${values.username}`
    });
  }

  render()  {

    const { errorMessage, notice } = this.props;

    return (
      <Grid fluid>
        { (notice === 'restricted' ) &&
        <Row>
          <Col md={4}>&nbsp;</Col>
          <Col md={4}>
            <Alert bsStyle="danger">
              Accessing that feature of Rolodex is restricted to signed in users.
            </Alert>
          </Col>
          <Col md={4}>&nbsp;</Col>
        </Row>
        }
        <Row>
          <Col md={4}>&nbsp;</Col>
          <Col md={4}>
            <Panel>
              <div className="text-center"><h3>Rolodex Login</h3></div>
              <p>&nbsp;</p>
              { errorMessage &&
              <Alert bsStyle="danger">
                {errorMessage}
              </Alert>
              }

              <LoginForm
                onSubmit={this.handleLogin}
                />

              <hr />
              <Link to="/forgot">Forgot your password?</Link>
            </Panel>
          </Col>
          <Col md={4}>&nbsp;</Col>
        </Row>

      </Grid>
    );
  }

}

LoginFormContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

LoginFormContainer.propTypes = {
  loginUser: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  notice: PropTypes.string,
};

function mapDispatchToProps(dispatch) {
  return {
    loginUser: function(creds){ return dispatch(loginActions.loginUser(creds)); },
  };
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
