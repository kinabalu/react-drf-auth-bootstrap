import React, {PropTypes} from 'react';

import { Field, reduxForm } from 'redux-form';

import { Grid, Row, Col } from 'react-bootstrap';

import { renderInput, required } from './FormInput';

const validate = values => {
  const errors = {};
  if (values.password !== values.confirmPassword) {
    errors.password = 'Passwords must match';
  }
  return errors;
};

let ResetPasswordForm = ({handleSubmit, pristine, submitting}) => {

  return (
    <Grid fluid>
    <form onSubmit={handleSubmit}>
      <Row>
        <Col md={12}>
          <div className="form-group">
          <Field type="password" component={renderInput} className="form-control input-lg" name="password" placeholder="New Password" validate={[required]}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="form-group">
          <Field type="password" component={renderInput} className="form-control input-lg" name="confirmPassword" placeholder="Confirm New Password" validate={[required]}/>
          </div>
        </Col>
      </Row>
      <button type="submit" className="btn btn-success btn-lg" disabled={pristine || submitting}>Reset Password</button><br /><br />

      </form>
    </Grid>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ResetPasswordForm = reduxForm({
  form: 'resetPasswordForm',
  validate,
})(ResetPasswordForm);

ResetPasswordForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default ResetPasswordForm;
