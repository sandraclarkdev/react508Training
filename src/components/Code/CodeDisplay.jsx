import React from 'react';
import PropTypes from 'prop-types';

const CodeDisplay = props => {
  const { codeDescription, children } = props;
  return (
    <div aria-label={`${codeDescription} - skipped for A T`}>
      <code aria-hidden="true">{children}</code>
    </div>
  );
};

CodeDisplay.propTypes = {
  codeDescription: PropTypes.string.isRequired,
  children: PropTypes.shape({}).isRequired,
};
export default CodeDisplay;
