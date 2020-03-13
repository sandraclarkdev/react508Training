/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const EmojiDescriptions = () => {
  return (
    <section>
      <p>
        Emojis and Emoticons are also confusing because despite the images most
        people see, they are still invoked with text which does not read the
        same way that an emoticon does.
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
          <CodeDisplay
            id="emoji"
            codeDescription="Code for a span, role of image with an aria-label of smile"
          >
            {`
<span role="img" aria-label="smile">😀</span>
`}
          </CodeDisplay>
        </div>
      </div>
    </section>
  );
};
export default EmojiDescriptions;
