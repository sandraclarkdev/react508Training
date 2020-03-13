import React from 'react';
import PropTypes from 'prop-types';
import { CodeSnippet } from 'carbon-components-react';

import { AnchorLink } from 'components/Links';

const CodeDisplay = props => {
  const { codeDescription, codeType, children, id } = props;

  if (codeType === 'inline') {
    return <CodeSnippet type="inline">{children}</CodeSnippet>;
  }
  if (codeType === 'multi') {
    return (
      <div>
        <p className="hidden">
          {`Example ${codeDescription}`}
          <AnchorLink href={`#skip-${id}`} title="Skip Code Example" />
        </p>
        <p aria-hidden="true">
          <strong>Example</strong>
        </p>
        <CodeSnippet type="multi">{children}</CodeSnippet>
        <span id={`skip-${id}`}> </span>
      </div>
    );
  }
  return (
    <div>
      <p className="hidden">
        {`${codeDescription}`}
        <AnchorLink href={`#skip-${id}`} title="Skip Code Example" />
      </p>
      <p aria-hidden="true">
        <strong>Example</strong>
      </p>
      <CodeSnippet type="single">{children}</CodeSnippet>
      <span id={`skip-${id}`}> </span>
    </div>
  );
};

CodeDisplay.propTypes = {
  codeDescription: PropTypes.string,
  codeType: PropTypes.string,
  children: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
};

CodeDisplay.defaultProps = {
  codeDescription: null,
  codeType: 'single',
};
export default CodeDisplay;
