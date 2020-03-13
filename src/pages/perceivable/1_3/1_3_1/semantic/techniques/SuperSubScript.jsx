import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const SuperSubScript = () => {
  return (
    <Fragment>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <p>
            While we don't tend to use superscript or subscripts in our code,
            its still useful to know how to use them. Screen readers will read
            text marked up with &lt;sup /&gt; and &lt;sub /&gt; in a much more
            accessible manner than if it was styled using CSS. You can still
            style the tags with CSS to get just the display you want, but the
            tags need to be used.
          </p>
          <p>
            Lawrence Cherono won 1<sup>st</sup> place in the Boston Marathon in{' '}
            <span aria-label="twenty nineteen">2019</span>
            <br />
            In other words H<sub>2</sub>0 is wet.
          </p>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <CodeDisplay
            id="sub-super-script"
            codeType="multi"
            codeDescription="Example of Subscript and Superscript"
          >
            {`
 <p>
 Lawrence Cherono won 1<sup>st</sup> place in the Boston Marathon in{' '}
 <span aria-label="twenty nineteen">2019</span>
 <br />
 In other words H<sub>2</sub>0 is wet.
</p>
  `}
          </CodeDisplay>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <p>
            Note in the code sample that an aria-label was used to have a screen
            reader pronounce the year correctly. It isn&apos;t a requirement, but
            where we can, it is a nice enhancement.
          </p>
        </div>
      </div>
    </Fragment>
  );
};
export default SuperSubScript;
