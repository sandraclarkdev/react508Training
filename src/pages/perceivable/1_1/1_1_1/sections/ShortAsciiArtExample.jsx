/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';
import { AnchorLink } from 'components/Links';

const AsciiArtExample = () => {
  return (
    <section>
      <h3>Emoticons</h3>
      <p>
        Emoticons are also confusing because despite the images most people see,
        they are still invoked with text which does not read the same way that
        an emoticon does.
      </p>
      <div>
        <p>
          There are several ways to display an emoticon along with the
          explanation of what it is. However, because of lint rules, only one
          solution works in React.
        </p>
        <div>
          Using a &lt;span&gt; with a role of &quot;img&quot; and an aria-label
          <span role="img" aria-label="smile">
            {' '}
            😀
          </span>
          <CodeDisplay codeDescription="Code for a span, role of image with an aria-label of smile">
            {`
<span role="img" aria-label="smile">😀</span>
`}
          </CodeDisplay>
        </div>
      </div>
      <h3>Ascii Art</h3>
      <p>
        While Ascii Art isn&apos;t used as much as it used to be, there are
        still techniques that are required to fully expose them to AT. When it
        is used, it can be very confusing to those using AT such as screen or
        braille readers. The basic technique is to have a text explanation of
        what the picture is and a link to skip the picture altogether
      </p>
      <div>
        <p>
          Figure 1. ASCII Shrug
          <AnchorLink href="#skipShrug" className="hidden">
            {`  `}Skip Ascii Image
          </AnchorLink>
        </p>
        <pre> ¯\_(ツ)_/¯ </pre>
        <span id="skipShrug"> </span>
      </div>
      <CodeDisplay codeType="multi" codeDescription="Code for ASCII Art Skip.">
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
        codeType="multi"
        codeDescription="Code for hiding ASCII art via aria-hidden."
      >
        {`
 <div aria-hidden="true">
  <p>Figure 1. ASCII Shrug
  <pre > ¯\_(ツ)_/¯ </pre></p>
</div>
`}
      </CodeDisplay>
    </section>
  );
};
export default AsciiArtExample;
