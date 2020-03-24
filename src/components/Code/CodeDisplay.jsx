import React from 'react';
import PropTypes from 'prop-types';
import { CodeSnippet } from 'carbon-components-react';

import { AnchorLink } from 'components/Links';

const CodeDisplay = props => {
  const { codeDescription, codeType, children, exampleNumber, id } = props;

  if (codeType === 'inline') {
    return <CodeSnippet type="inline">{children}</CodeSnippet>;
  }
  if (codeType === 'multi') {
    return (
      <div>
        <div className="sr-only">
        <p>{`Example ${exampleNumber} ${codeDescription}`}</p>
          <AnchorLink href={`#skip-${id}`} title="Skip Code Example" />
        </div>
        <p aria-hidden="true">
          <strong>Example {exampleNumber}</strong>
        </p>
        <CodeSnippet type="multi">{children}</CodeSnippet>
        <span id={`skip-${id}`}> </span>
      </div>
    );
  }
  return (
    <div>
      <div className="sr-only">
        <p>{`Example ${exampleNumber} ${codeDescription}`}</p>
        <AnchorLink href={`#skip-${id}`} title="Skip Code Example" />
      </div>
      <p aria-hidden="true">
      <strong>Example {exampleNumber}</strong>
      </p>
      <CodeSnippet type="single">{children}</CodeSnippet>
      <span id={`skip-${id}`}> </span>
    </div>
  );
};

CodeDisplay.propTypes = {
  codeDescription: PropTypes.string,
  codeType: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]).isRequired,
  id: PropTypes.string.isRequired,
  exampleNumber: PropTypes.number,
};

CodeDisplay.defaultProps = {
  codeDescription: null,
  codeType: 'single',
  exampleNumber: null,
};
export default CodeDisplay;
