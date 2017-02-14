import React, {PropTypes} from 'react';

const NotFoundPage = (props) => {
  return (
    <h1>404 - Not Found</h1>
  );
};

NotFoundPage.propTypes = {
  params: PropTypes.object.isRequired
};

export default NotFoundPage;
