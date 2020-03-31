import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const FormView = () => {
  return (
    <Fragment>
      <p>
        While Forms are easily made accessible by using associating labels with
        form controls, we also need to associate the same when creating a view
        only version of a form. Utilizing a form without a save button can be
        disconcerting for a non-sighted user since they have no way of knowing
        the form cannot be modified until they realize there is no save or
        submit button.
      </p>
      <p>
        If we think about a form semantically, we realize that labels are terms
        and inputs are definitions so using a definition list &lt;dl /&gt; is a
        perfect substitution. We can even style the corresponding tags within a
        &lt;dl /&gt; to mimic our forms.
      </p>
      <h2>Creating a Literal View of a Form </h2>
      <h3>Personal Information</h3>
      <dl className="form">
        <dt>First Name</dt>
        <dd>Jane</dd>
        <dt>Last Name</dt>
        <dd>Doe</dd>
        <dt>I own a Bike</dt>
        <dd>True</dd>
        <dt>I own a Boat</dt>
        <dd>False</dd>
        <dt>I own a Car</dt>
        <dd>True</dd>
        <br />
      </dl>
      <p>
        Styling allows the definitions to line up with the terms, allowing for a
        cohesive view of a form. Additionally, using CSS to add the colon after
        the term helps to give visual separation to the term/label and is read
        after.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="Literal Form for a view with CSS."
      >{`
// SCSS
dl {
  &.form {
    margin: 1rem;
    dt,
    dd {
      float: left;
      margin: 0;
      padding: 0;
    }
    dt {
      clear: both;
      display: inline-block;
      font-weight: bold;
      margin-bottom: 1rem;
      padding-right: 1rem;
      text-align: right;
      width: 22%;
      &::after {
        content: ':';
      }
    }
    dd {
      display: inline-block;
      margin-right: 5px;
    }
  }
}
// Code
<dl className="form">
  <dt>First Name</dt>
  <dd>Jane</dd>
  <dt>Last Name</dt>
  <dd>Doe</dd>
  <dt>I own a Bike</dt>
  <dd>True</dd>
  <dt>I own a Boat</dt>
  <dd>False</dd>
  <dt>I own a Car</dt>
  <dd>True</dd>
</dl><br />

      `}</CodeDisplay>
      <h2>Creating a friendlier view of a form </h2>
      <h3>Personal Information</h3>
      <dl className="form">
        <dt>Name (Last, First)</dt>
        <dd>Doe, Jane</dd>
        <dt>Vehicles Owned</dt>
        <dd>
          <ul>
            <li>Bike</li>
            <li>Car</li>
          </ul>
        </dd>
      </dl>
      <br />
      <p>
        Not every form has to be represented literally in a view. Items can be
        combined when they are grouped and are more readable. Note that the list
        of items&apos;s owned is actually structured into a &lt;ul /&gt; list.
        The CSS used in Example 2 is the same as for Example 1 except for the
        addition of a margin-bottom for an li within the dt.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={2}
        codeDescription="More readable form for a view."
      >{`
  <dl className="form">
    <dt>Name (Last, First)</dt>
      <dd>Doe, Jane</dd>
    <dt>Vehicles Owned</dt>
    <dd>
    <ul>
      <li>Bike</li>
      <li>Car</li>
    </ul>
  </dd>
</dl><br />
         `}</CodeDisplay>
    </Fragment>
  );
};
export default FormView;
