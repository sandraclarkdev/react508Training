/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { TAB } from 'libraries/constants/constants';

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
          <div>
            <span role="img" aria-label="smile">
              😀
            </span>
          </div>
          <CodeDisplay codeDescription="Code for a span, role of image with an aria-label of smile">
            &lt;span role=&quot;img&quot;
            aria-label=&quot;smile&quot;&gt;😀&lt;/span&gt;
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
        <p>Figure 1. ASCII Shrug</p>
        <AnchorLink href="#skipShrug" className="hidden">
          Skip Ascii Image
        </AnchorLink>
        <pre> ¯\_(ツ)_/¯ </pre>
        <span id="skipShrug"> </span>
      </div>
      <CodeDisplay codeDescription="Code for ASCII Art Skip.">
        &lt;p&gt;Figure 1. ASCII Shrug&lt;/p&gt;
        <br />
        &lt;a href=&quot;#skipShrug&quot; class=&quot;hidden&quot;&gt;Skip Ascii
        Image&lt;/a&gt;
        <br />
        {TAB}&lt;pre&gt; ¯\_(ツ)_/¯ &lt;/pre&gt;
        <br />
        &lt;a name=&quot;skipShrug&quot;&gt;&lt;/a&gt;
      </CodeDisplay>
      <p> another way to do it would be to hide the entire image from AT</p>
      <div>
        <p>Figure 1. ASCII Shrug</p>
        <pre aria-hidden="true"> ¯\_(ツ)_/¯ </pre>
      </div>
      <CodeDisplay codeDescription="Code for hiding ASCII art via aria-hidden.">
        &lt;p&gt;Figure 1. ASCII Shrug&lt;/p&gt;
        <br />
        &lt;pre aria-hidden=&quot;true&quot;&gt; ¯\_(ツ)_/¯ &lt;/pre&gt;
      </CodeDisplay>
    </section>
  );
};
export default AsciiArtExample;
