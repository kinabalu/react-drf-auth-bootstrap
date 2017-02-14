import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import ReactGA from 'react-ga';

import * as loginActions from '../actions/loginActions';

import Header from '../components/Header';

class HeaderContainer extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  logout() {
    this.props.actions.logoutUser();
    this.context.router.push('/login');
  }

  render() {
    const { isAuthenticated, username } = this.props;

    return (
      <Header
        isAuthenticated={isAuthenticated}
        username={username}
        onLogout={this.logout.bind(this)}
        />
    );
  }
}


HeaderContainer.contextTypes = {
  router: PropTypes.object.isRequired
};

HeaderContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  username: PropTypes.string,
  isAuthenticated: PropTypes.bool
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    username: state.auth.username
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
