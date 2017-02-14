import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import {renderInput, required, email} from './FormInput';


const validate = values => {
  const errors = {};
  if (values.password !== values.confirmPassword) {
    errors.password = 'Passwords must match';
  }
  return errors;
};

let RegisterForm = ({handleSubmit, pristine, submitting}) => {

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field type="email" component={renderInput} className="form-control input-lg"
          autoFocus="autofocus" name="username" placeholder="E-mail"
          validate={[required, email]}
          />

        <Field type="text" component={renderInput} className="form-control input-lg"
          name="first_name" placeholder="First Name"
          validate={[required]}
          />

        <Field type="text" component={renderInput} className="form-control input-lg"
          name="last_name" placeholder="Last Name"
          />

        <hr />

        <Field type="password" component={renderInput} className="form-control input-lg"
          placeholder="Password" name="password"
          validate={[required]}
          />

        <Field type="password" component={renderInput} className="form-control input-lg"
          placeholder="Confirm Password" name="confirmPassword"
          validate={[required]}
          />

        <div className="text-right">
          <button type="submit" className="btn btn-success btn-lg" disabled={pristine || submitting}>Register</button>
        </div>
      </form>
    </div>
  );
};

RegisterForm = reduxForm({
  form: 'registerForm',
  validate
})(RegisterForm);

RegisterForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default RegisterForm;
