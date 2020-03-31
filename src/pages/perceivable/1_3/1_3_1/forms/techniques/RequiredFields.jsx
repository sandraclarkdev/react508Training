import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const RequiredFields = () => {
  return (
    <Fragment>
      Most of our required fields use a a red <span aria-hidden>*</span>{' '}
      <span className="sr-only">asterisk</span> in the label for our sighted
      users. We also need to use the aria-required attribute within the form
      controls themselves to make sure that the fact a field is required is
      available in an obvious way for{' '}
      <abbr title="Accessible Technology" aria-label="Accessible Technology">
        AT
      </abbr>
      . The asterisk can either be hidden from non-sighted users or be
      overridden with an aria-label. Either way we don&apos;t need{' '}
      <abbr title="Accessible Technology" aria-label="Accessible Technology">
        AT
      </abbr>{' '}
      to read the asterisk as either &quot;asterisk&quot; or &quot;star&quot;.
      <h2>Hiding asterisk and marking field as required.</h2>
      <form className="labels-left">
        <fieldset>
          <label htmlFor="firstName1">
            First Name{' '}
            <span className="required-field" aria-hidden="true">
              {' '}
              *
            </span>
          </label>
          <input type="text" id="firstName1" name="firstName" aria-required />
          <br />
          <label htmlFor="lastName1">
            Last Name{' '}
            <span className="required-field" aria-hidden="true">
              {' '}
              *
            </span>
          </label>
          <input type="text" id="lastName1" name="lastName" aria-required />
          <br />
        </fieldset>
      </form>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="hiding asterisks, marking inputs as required."
      >{`
<form className="labels-left">
  <fieldset>
    <label htmlFor="firstName1">
      First Name{' '}
      <span className="required-field" aria-hidden="true">
        {' '}
        *
      </span>
    </label>
    <input type="text" id="firstName1" name="firstName" aria-required />
    <br />
    <label htmlFor="lastName1">
      Last Name{' '}
      <span className="required-field" aria-hidden="true">
        {' '}
        *
      </span>
    </label>
    <input type="text" id="lastName1" name="lastName" aria-required />
    <br />
  </fieldset>
</form>
      `}</CodeDisplay>
      <h2>Overriding asterisk and marking field as required</h2>
      <form className="labels-left">
        <fieldset>
          <label htmlFor="firstName2">
            First Name{' '}
            <span className="required-field" aria-label="required field">
              {' '}
              *
            </span>
          </label>
          <input type="text" id="firstName2" name="firstName" aria-required />
          <br />
          <label htmlFor="lastName2">
            Last Name{' '}
            <span className="required-field" aria-label="required field">
              {' '}
              *
            </span>
          </label>
          <input type="text" id="lastName2" name="lastName" aria-required />
          <br />
        </fieldset>
      </form>
      <CodeDisplay
        codeType="multi"
        exampleNumber={2}
        codeDescription="over-riding asterisks, marking inputs as required."
      >{`
<form className="labels-left">
  <fieldset>
    <label htmlFor="firstName2">
      First Name{' '}
      <span className="required-field" aria-label="required field">
        {' '}
        *
      </span>
    </label>
    <input type="text" id="firstName2" name="firstName" aria-required />
    <br />
    <label htmlFor="lastName2">
      Last Name{' '}
      <span className="required-field" aria-label="required field">
        {' '}
        *
      </span>
    </label>
    <input type="text" id="lastName2" name="lastName" aria-required />
    <br />
  </fieldset>
</form>
      `}</CodeDisplay>
    </Fragment>
  );
};
export default RequiredFields;
