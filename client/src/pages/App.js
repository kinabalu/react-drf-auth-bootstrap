import React, {PropTypes} from 'react';

import AppContainer from '../containers/AppContainer';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer>
       {this.props.children}
      </AppContainer>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired
};
