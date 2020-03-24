import React from 'react';
import PropTypes from 'prop-types';

// handles 1.0 and 1.1
const SvgComponent = props => {
  const { width, height, title, viewBox, children } = props;
  if (viewBox) {
    return (
      <svg viewBox={viewBox}>
        <title>{title}</title>
        {children}
      </svg>
    );
  }
  return (
    <svg version="1.1" width={width} height={height}>
      <title>{title}</title>
      {children}
    </svg>
  );
};
const requiredSVGCheck = (props, propName, componentName) => {
  if (!props.viewBox && !props.width && !props.height) {
    return new Error(
      `Either path/viewBox or width/height is required by ${componentName}`,
    );
  }
  if (props.viewBox && (!props.path && props.viewBox)) {
    return new Error(`Path and ViewBox are required together`);
  }

  if ((props.width && !props.height) || (!props.width && props.height)) {
    return new Error(`Width and Height are required together`);
  }
  return false;
};

SvgComponent.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.shape({}).isRequired,
  viewBox: requiredSVGCheck,
  width: requiredSVGCheck,
  height: requiredSVGCheck,
};

SvgComponent.defaultProps = {
  viewBox: undefined,
  width: undefined,
  height: undefined,
};

export default SvgComponent;
