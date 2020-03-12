import React, { Fragment } from 'react';
import CodeDisplay from 'components/Code/CodeDisplay';

import { FieldWrapper, RequiredText } from 'components/FormFields';

const RequiredFormFields = () => {
  return (
    <Fragment>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <p>
            It is quite common to show a red asterisk next to a required form
            field. The issue is that for a non-sighted users, the asterisk
            doesn&apos;t mean much and could be overlooked.
          </p>
          <p>
            We need to use a combination of both aria attributes and an off-left
            CSS technique to make the information available to everyone in the
            way that best conveys the information to each type of user.
          </p>
        </div>
      </div>
      <form>
        <div className="bx--row">
          <div className="bx--col-lg-12">
            <RequiredText />
          </div>
        </div>
        <div className="bx--row">
          <div className="bx--col-lg-12">
            <FieldWrapper
              id="first-name"
              labelString="First Name"
              labelClasses="label-right"
              labelColClasses="bx--col-lg-3"
              required
            >
              <div className="bx--col-lg-3">
                <input
                  id="first-name"
                  name="first-name"
                  type="input"
                  aria-required
                />
              </div>
            </FieldWrapper>
          </div>
        </div>
      </form>

      <div className="bx--row">
        <div className="bx--col-lg-12">
          <p>
            <strong>Instructions</strong>: The instructions for the form field
            are for both sighted and non-sighted users. However because the red
            color cannot be the only way to indicate a required field, we use a
            red asterisk styled through CSS for color-blind users. The asterisk
            is sufficient for this.
          </p>
          <p>
            It gets slightly more tricky to allow non-sighted users to
            understand what is going on. They don&apos;t need to hear the word
            &#34;asterisk&#34;, what they need to know is if a field is
            required.
          </p>
          <p>
            Notice that in the Code Example following: that the word
            &#34;required&#34; is placed into a span with a class named hidden.
            That hidden class is an off-left technique that places the text in
            an area outside of the viewport, but it will still read in the DOM.
            Some organizations call it sr-only.
          </p>
          <p>
            The span with the actual asterisk is not read by a screen reader
            since it uses the aria-hidden attribute. This hides information from
            the screen reader. What we end up with is a sentence that is usable
            by color-blind, sighted and non-sighted users in a manner that is
            accessible to all of them.
          </p>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <CodeDisplay codeType="multi" codeDescription="Required Text Coding">
            {`
<Fragment>
  All required fields are marked <span className="hidden">required</span>
  <span aria-hidden="true">
    with an asterisk (<span className="required-field">*</span>)
  </span>
</Fragment>
`}
          </CodeDisplay>
        </div>
      </div>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <p>
            <strong>Required Label</strong>: We follow a similar pattern with
            the required field itself. In this case, if a required prop is
            passed to the called component, then the asterisk is shown to
            sighted users, but hidden from non-sighted users. Additionally, the
            aria-required attribute is placed on the actual input which will
            then have a screen reader note that it is required.
          </p>
        </div>
      </div>

      <div className="bx--row">
        <div className="bx--col-lg-12">
          <CodeDisplay codeType="multi" codeDescription="Required Label Coding">
            {`
<div className={labelColClasses}>
  <label id={'id-label'} htmlFor={id} className={labelClasses}>
    {labelString}
    {required && (
      <span className="required-field" aria-hidden="true">{' '}*</span>
    )}
  </label>
</div>
<div className="bx--col-lg-3">
  <input id="first-name" name="first-name" type="input" aria-required />
</div>
)}
            `}
          </CodeDisplay>
        </div>
      </div>
    </Fragment>
  );
};

export default RequiredFormFields;
