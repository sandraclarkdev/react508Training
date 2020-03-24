import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const QuoteCite = () => {
  return (
    <Fragment>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <p>
            There are tags that work with text to define quotations and
            citations. They are:
          </p>
          <p>
            <strong>&lt;blockquote /&gt;</strong> - A way of emphasizing longer
            quotations that may have paragraph breaks.
          </p>
          <p>
            Blockquotes will indent text and unfortunately developers have been
            known to use it for presentation. But we have CSS for that, and a
            blockquote should be used solely to quote text.
          </p>
          <p>
            CSS should be used in conjunction with BlockQuote to make sure that
            quotes surround the text within. Because developers have used it for
            presentation, the specification does not call for automatic quotes.
          </p>
          <p>
            The &lt;cite /&gt; tag allows a browser to include a reference. Cite
            may be used when identifying the person being quoted, or when citing
            a reference when used in more scholarly writing.
          </p>
          <blockquote>
            <p>
              Accessible design is good design - it benefits people who
              don&apos;t have disabilities as well as people who do.
            </p>
            <p>
              Accessibility is all about removing barriers and providing the
              benefits of technology for everyone.
            </p>
            <cite >~ Steve Ballmer</cite>
          </blockquote>
          <CodeDisplay
            id="quote-cite"
            codeType="multi"
            codeDescription="Example of blockquote and cite tags"
          >{`
        <blockquote>
        <p>
          Accessible design is good design - it benefits people who
          don't have disabilities as well as people who do.
        </p>
        <p>
          Accessibility is all about removing barriers and providing the
          benefits of technology for everyone.
        </p>
        <cite>~ Steve Ballmer</cite>
      </blockquote>
               `}</CodeDisplay>
        </div>
      </div>
    </Fragment>
  );
};
export default QuoteCite;
