/* eslint-disable no-useless-escape */

import React from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';
import { AnchorLink } from 'components/Links';

const AsciiDescription = () => {
  return (
    <section>
      <p>
        While Ascii Art isn&apos;t used as much as it used to be, there are
        still techniques that are required to fully expose them to AT. When it
        is used, it can be very confusing to those using{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        such as screen or braille readers. The basic technique is to have a text
        explanation of what the picture is and a link to skip the picture
        altogether
      </p>
      <div>
        <p>
          Figure 1. ASCII Shrug
          <AnchorLink href="#skipShrug" className="hidden">
            {`  `}Skip Ascii Image
          </AnchorLink>
        </p>
        <p>
          <pre> ¯\_(ツ)_/¯ </pre>
        </p>
        <span id="skipShrug"> </span>
      </div>
      <CodeDisplay
        id="ascii-image"
        codeType="multi"
        codeDescription="Code for ASCII Art Skip."
        exampleNumber={1}
      >
        {`
<p>Figure 1. ASCII Shrug
  <AnchorLink href="#skipShrug" className="hidden">
    Skip Ascii Image
    </AnchorLink>
</p>


<pre> ¯\_(ツ)_/¯ </pre>
<span id="skipShrug"></span>
`}
      </CodeDisplay>
      <p> another way to do it would be to hide the entire image from AT</p>
      <div aria-hidden="true">
        <p>
          Figure 1. ASCII Shrug {'  '}
          <pre> ¯\_(ツ)_/¯ </pre>
        </p>
      </div>
      <CodeDisplay
        id="skip-aria-hidden"
        codeType="multi"
        codeDescription="Code for hiding ASCII art via aria-hidden."
        exampleNumber={2}
      >
        {`
 <div aria-hidden="true">
  <pre > ¯\_(ツ)_/¯ </pre></p>
</div>
`}
      </CodeDisplay>
    </section>
  );
};
export default AsciiDescription;
