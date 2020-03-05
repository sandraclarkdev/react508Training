import React from 'react';
import PropTypes from 'prop-types';
import { CodeSnippet } from 'carbon-components-react';

const CodeDisplay = props => {
  const { codeDescription, codeType, children } = props;
  if (codeType === 'inline') {
    return <CodeSnippet type="{codeType}">{children}</CodeSnippet>;
  }
  return (
    <div>
      <p className="hidden">{`${codeDescription} - skipped for A T`}</p>
      <CodeSnippet type={codeType}>{children}</CodeSnippet>
    </div>
  );
};

CodeDisplay.propTypes = {
  codeDescription: PropTypes.string,
  codeType: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
};

CodeDisplay.defaultProps = {
  codeDescription: null,
  codeType: 'single',
};
export default CodeDisplay;
