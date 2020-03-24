import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const RequiredFieldsText = ({ text }) => <p>{text}</p>;

RequiredFieldsText.propTypes = {
  text: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};
RequiredFieldsText.defaultProps = {
  text: (
    <Fragment>
      All required fields are marked <span className="sr-only">required</span>
      <span aria-hidden="true">
        {' '}
        with an asterisk (<span className="required-field">*</span>)
      </span>
    </Fragment>
  ),
};

export default RequiredFieldsText;
