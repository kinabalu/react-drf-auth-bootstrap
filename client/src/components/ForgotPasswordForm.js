import React, {PropTypes} from 'react';

import { Field, reduxForm } from 'redux-form';

import { Grid, Row, Col } from 'react-bootstrap';

import { renderInput, required } from './FormInput';

let ForgotPasswordForm = ({handleSubmit, pristine, submitting}) => {

  return (
    <Grid fluid>
    <form onSubmit={handleSubmit}>
      <Row>
        <Col md={12}>
          <div className="form-group">
          <Field type="email" component={renderInput} autoFocus={true}
            className="form-control input-lg" name="email" placeholder="E-mail"
            validate={[required]}/>
          </div>
        </Col>
      </Row>
      <button type="submit" className="btn btn-success btn-lg" disabled={pristine || submitting}>Request Password</button><br /><br />

      </form>
    </Grid>
  );
};

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
ForgotPasswordForm = reduxForm({
  form: 'forgotPasswordForm',

})(ForgotPasswordForm);

ForgotPasswordForm.propTypes = {
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func
};

export default ForgotPasswordForm;
