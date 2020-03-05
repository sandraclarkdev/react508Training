import React from 'react';
import PropTypes from 'prop-types';
import { CodeSnippet } from 'carbon-components-react';

const CodeDisplay = props => {
  const { codeDescription, codeType, children } = props;
  return (
    <div>
      <p className="hidden">{`${codeDescription} - skipped for A T`}</p>
      <CodeSnippet type={codeType}>{children}</CodeSnippet>
    </div>
  );
};

CodeDisplay.propTypes = {
  codeDescription: PropTypes.string.isRequired,
  codeType: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
};

CodeDisplay.defaultProps = {
  codeType: 'single',
};
export default CodeDisplay;
