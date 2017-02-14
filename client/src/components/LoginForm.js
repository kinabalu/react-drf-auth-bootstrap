import React, { PropTypes } from 'react';

import { Field, reduxForm } from 'redux-form';
import {renderInput, required, email} from './FormInput';

let LoginForm = ({errorMessage, handleSubmit, pristine, submitting}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field type="email" component={renderInput} className="form-control input-lg"
          autoFocus="autofocus" name="username" placeholder="E-mail"
          validate={[required, email]}
          />

        <Field type="password" component={renderInput} className="form-control input-lg"
          name="password" placeholder="Password"
          validate={[required]}
          />

        <div className="text-right">
          <button type="submit" className="btn btn-success btn-lg" disabled={pristine || submitting}>Login</button>
        </div>

      {errorMessage &&
        <p>{errorMessage}</p>
      }
      </form>
    </div>
  );
};

LoginForm = reduxForm({
  form: 'loginForm'
})(LoginForm);

LoginForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  errorMessage: PropTypes.string
};

export default LoginForm;
