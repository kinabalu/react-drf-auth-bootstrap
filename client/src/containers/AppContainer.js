import React, { PropTypes } from 'react';
// import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from '../actions/users';
import App from '../components/App';

class AppContainer extends React.Component {
  // constructor(props, context) {
  //   super(props, context);
  // }

  render() {
    return (
        <App>
          {this.props.children}
        </App>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
