/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';

const FieldWrapper = props => {
  const {
    children,
    description,
    id,
    labelClasses,
    labelColClasses,
    labelProps,
    labelString,
    nested,
    required,
  } = props;
  if (nested) {
    const { ...nestedLabelProps } = labelProps;
    return (
      <Fragment>
        <label className={labelClasses}>
          {children}
          <div {...nestedLabelProps}>
            {labelString}
            {required && (
              <span className="required-field" aria-hidden="true">
                {' '}
                *
              </span>
            )}
          </div>
        </label>
        {description && (
          <div className="label-description" id={`${id}-description`}>
            {description}
          </div>
        )}
      </Fragment>
    );
  }
  return (
    <Fragment>
      <div className={labelColClasses}>
        <label id={`${id}-label`} htmlFor={id} className={labelClasses}>
          {labelString}
          {required && (
            <span className="required-field" aria-hidden="true">
              {' '}
              *
            </span>
          )}
        </label>
      </div>
      {children}
      {description && (
        <div className="label-description" id={`${id}-description`}>
          {description}
        </div>
      )}
    </Fragment>
  );
};

FieldWrapper.propTypes = {
  children: PropTypes.shape({}).isRequired,
  description: PropTypes.shape({}),
  id: requiredIf(PropTypes.string, props => props.nested !== true),
  labelClasses: PropTypes.string,
  labelColClasses: PropTypes.string,
  labelProps: PropTypes.shape({}),
  labelString: PropTypes.string.isRequired,
  nested: PropTypes.bool,
  nestedLabelProps: requiredIf(
    PropTypes.shape({}),
    props => props.nested === true,
  ),
  required: PropTypes.bool,
};
FieldWrapper.defaultProps = {
  description: null,
  id: null,
  labelClasses: null,
  labelColClasses: null,
  labelProps: null,
  nested: false,
  nestedLabelProps: null,
  required: false,
};
export default FieldWrapper;
