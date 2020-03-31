import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const GroupingSections = () => {
  return (
    <Fragment>
      <h2>Grouping Forms with Headings for all users</h2>
      <form className="labels-left">
        <fieldset>
          <legend className="h3">Personal Information</legend>
          <label htmlFor="firstName1">First Name</label>
          <input type="text" id="firstName1" name="firstName" />
          <br />
          <label htmlFor="lastName1">Last Name</label>
          <input type="text" id="lastName1" name="lastName" />
          <br />
        </fieldset>
      </form>
      <p>
        Legends may be styled to look like headings. as well, fieldset borders
        may be removed via CSS. Presentation is separate from semantic
        structure.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="using legend in a fieldset to show as a header for a grouping of items"
      >{`
  <form className="labels-left">
    <fieldset>
      <legend className="h3">Personal Information</legend>
      <label htmlFor="firstName1">First Name</label>
      <input type="text" id="firstName1" name="firstName" />
      <br />
      <label htmlFor="lastName1">Last Name</label>
      <input type="text" id="lastName1" name="lastName" />
      <br />
    </fieldset>
  </form>
  `}</CodeDisplay>
    </Fragment>
  );
};
export default GroupingSections;
