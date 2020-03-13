import React from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const StrongText = () => {
  return (
    <div className="bx--row">
      <div className="bx--col-lg-12">
        <p>
          When we think about strongly emphasized text we tend to think of just
          making the text bold. That&apos;s all we want right?
        </p>
        <p>
          Incorrect. Wrapping text with the the
          <strong> &lt;strong &gt;&lt;/strong&gt;</strong> tags does bold the
          text within a browser, but it also emphasizes that the text is strong.
          A screen reader will read it with an emphasis that is emphatic.
        </p>
        <p>
          Emphasized text is commonly recognized visually as italics, we use the
          <strong>
            <em>&lt;em&gt;&lt;/em&gt;</em>
          </strong>
          tag.
        </p>

        <p>
          <strong>Example of &lt;strong /&gt; and &lt;em /&gt;</strong> <br />
          We <strong>Passed</strong> the <em>IQIES</em> 508 Testing!
        </p>
        <CodeDisplay
          id="strong-em"
          codeType="single"
          codeDescription="Example of Strong and Emphasis tags"
        >{`
We <strong>Passed</strong> the <em>IQIES</em> 508 Testing!
              `}</CodeDisplay>

        <p>
          <strong>Nesting</strong>
        </p>
        <p>
          We can nest the &lt;strong /&gt; and &lt;em /&gt; tags to produce
          items that are both strong and emphasized.{' '}
        </p>
        <p>
          Example of Nesting <br /> We can nest
          <strong>
            {' '}
            strong and em tags,
            <em>
              {' '}
              But what type of emphasis are we trying to convey when we do that?
            </em>
          </strong>
        </p>

        <CodeDisplay
          id="nested-strong"
          codeType="single"
          codeDescription="Example of nested Strong and Emphasis tags"
        >{`
We can nest <strong>strong and em tags, <em>But what type of emphasis are we trying to convey when we do that?</em></strong>
               `}</CodeDisplay>
      </div>
    </div>
  );
};
export default StrongText;
