import React, { Fragment } from 'react';
import CodeDisplay from 'components/Code/CodeDisplay';

const CSSOverview = () => {
  return (
    <Fragment>
      <h4>Use CSS for all Presentation</h4>
      <p>
        All visual presentation that can be accommodated in CSS should be. This
        separates the presentation from the structure in a way most compatible
        with AT. This is not to say that{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        doesn&apos;t interact with CSS at all, (it does read it and honors
        &#34;display:none&#34; and &#34;visibility:hidden&#34; by hiding the
        content with those styles), but for the most part, we can create our
        pages so that HTML provides the structure and semantics and CSS displays
        them.
      </p>
      <p>
        This means that we care more about how our page is initially structured
        than how it looks with CSS.
      </p>
      <h5>Headings are Essential</h5>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <p>
            Headings are very important with Screen Readers since a non-sighted
            user can and will navigate a page by Headers. Heading structure
            tells a user how important something is, nesting the headings
            correctly informs a user of relationships between them.{' '}
          </p>
          <p>
            Not every header we create will need to look like a header to visual
            users. If you are creating a line that is bolded that announces what
            is below the line visually, its quite possible that you need to make
            it a header and style it in a way that make it look like regular
            text.
          </p>

          <p>
            Additionally, there will be cases where it is appropriate to create
            a heading for use with screen readers only. A sighted user can see
            that a grouping is related, but a header helps the non-sighted user
            understand the groupings as well.
          </p>
        </div>
      </div>

      <div className="bx--row">
        <div className="bx--col-lg-12">
          <h2 className="hidden">Summary Bar</h2>
          <div className="summary-bar-enclosure">
            <div className="summary-bar">
              <div className="summary-bar-item">
                <h3>Survey Status</h3>
                <p>Writing in progress</p>
              </div>
              <div className="summary-bar-item">
                <h3>Survey Category</h3>
                <p>Initial Licensure</p>
              </div>
              <div className="summary-bar-item">
                <h3>Start Date</h3>
                <p>12/25/2019</p>
              </div>
              <div className="summary-bar-item">
                <h3>Exit Date</h3>
                <p>12/26/2019</p>
              </div>
              <div className="summary-bar-item">
                <h3>Revisit Status</h3>
                <p>Not Determined</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <CodeDisplay
            id="css-headers"
            codeType="multi"
            codeDescription="Example of Headings styled to text"
          >{`
<h2 className="hidden">Summary Bar</h2>
<div className="summary-bar-enclosure">
  <div className="summary-bar">
    <div className="summary-bar-item">
      <h3>Survey Status</h3>
      <p>Writing in progress</p>
    </div>
    <div className="summary-bar-item">
      <h3>Survey Category</h3>
      <p>Initial Licensure</p>
    </div>
    <div className="summary-bar-item">
      <h3>Start Date</h3>
      <p>12/25/2019</p>
    </div>
    <div className="summary-bar-item">
      <h3>Exit Date</h3>
      <p>12/26/2019</p>
    </div>
    <div className="summary-bar-item">
      <h3>Revisit Status</h3>
      <p>Not Determined</p>
    </div>
  </div>
</div>
        `}</CodeDisplay>
        </div>
      </div>
    </Fragment>
  );
};

export default CSSOverview;
