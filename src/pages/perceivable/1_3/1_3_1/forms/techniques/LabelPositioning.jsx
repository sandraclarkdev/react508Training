import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const LabelPositioning = () => {
  return (
    <Fragment>
      <p>
        When positioning labels, consistency is key. Consistent placement helps
        make a form both more useable and more accessible. Users have grown to
        expect that a label for a field is usually to the left of the input,
        except in certain circumstances.
      </p>
      <p>
        For the most part, labels should be to the left of or above the input,
        so that labels and inputs can line up correctly. Exceptions would be
        checkboxes and radio buttons which are consistent in width and so can
        have the labels be to the right of the control.
      </p>
      <p>
        Form label placement should be consistent in type, so while we could
        have separate placements for a Filter grouping or a page to enter
        information, it&apos;s important to be consistent.
      </p>
      <h2>Labels to the Left - Checkboxes to the Right</h2>
      <form className="labels-left">
        <fieldset>
          <label htmlFor="firstName1">First Name</label>
          <input type="text" id="firstName1" name="firstName" />
          <br />
          <label htmlFor="lastName1">Last Name</label>
          <input type="text" id="lastName1" name="lastName" />
          <br />
          <label className="position-right" htmlFor="vehicleBike1">
            I own a Bike
          </label>
          <input type="checkbox" id="vehicleBike1" name="vehicleBike" />
          <br />
          <label className="position-right" htmlFor="vehicleBoat1">
            I own a Boat
          </label>
          <input type="checkbox" id="vehicleBoat1" name="vehicleBoat" />
          <br />
          <label className="position-right" htmlFor="vehicleCar1">
            I own a Car
          </label>
          <input type="checkbox" id="vvehicleCar1" name="vehicleCar" />
          <br />
        </fieldset>
      </form>
      <p>
        In this example, without exception the labels are to the left of the
        inputs in the DOM and there are no div&apos;s surrounding it. Placement
        is done solely via CSS and the &lt;br /&gt; tags are used to clear the
        floats. You may use &lt;div /&gt; tags here to separate label and inputs
        as well, since they are non-semantic. But the beauty of forgoing
        the&lt;div /&gt; tags is that the presentation of input and labels is
        not dependent on the structure.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="Code with text input labels showing left of the input and checkbox labels showing on the right."
      >
        {`
<form className="labels-left">
  <fieldset>
    <label htmlFor="firstName1">First Name</label>
    <input type="text" id="firstName1" name="firstName" />
    <br />
    <label htmlFor="lastName1">Last Name</label>
    <input type="text" id="lastName1" name="lastName" />
    <br />
    <label className="position-right" htmlFor="vehicleBike1">
      I own a Bike
    </label>
    <input type="checkbox" id="vehicleBike1" name="vehicleBike" />
    <br />
    <label className="position-right" htmlFor="vehicleBoat1">
      I own a Boat
    </label>
    <input type="checkbox" id="vehicleBoat1" name="vehicleBoat" />
    <br />
    <label className="position-right" htmlFor="vehicleCar1">
      I own a Car
    </label>
    <input type="checkbox" id="vvehicleCar1" name="vehicleCar" />
    <br />
  </fieldset>
</form>
      `}
      </CodeDisplay>
      <h2>Labels on Top, Checkboxes to the right</h2>
      <form className="labels-top">
        <fieldset>
          <label nested>
            First Name <input type="text" id="firstName2" name="firstName" />
          </label>
          <label nested>
            Last Name
            <input type="text" id="lastName2" name="lastName" />
          </label>
          <br />
          <label className="position-right" htmlFor="vehicleBike2">
            I own a Bike
          </label>
          <input type="checkbox" id="vehicleBike2" name="vehicleBike" />
          <br />
          <label className="position-right" htmlFor="vehicleBoat2">
            I own a Boat
          </label>
          <input type="checkbox" id="vehicleBoat2" name="vehicleBoat" />
          <br />
          <label className="position-right" htmlFor="vehicleCar2">
            I own a Car
          </label>
          <input type="checkbox" id="vehicleCar2" name="vehicleCar" />
          <br />
        </fieldset>
      </form>
      <p>
        While the same label placement and formatting are still applied to the
        checkboxes, note that the inputs are nested within the labels and are
        placed after the label wording. There are no id&apos;s or htmlFor
        required since the nesting itself provides the connection. Again all
        presentation is done via CSS.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={2}
        codeDescription="Code with text input labels showing top of the input and checkbox labels showing on the right."
      >
        {`
 <form className="labels-top">
  <fieldset>
    <label nested>
      First Name <input type="text" id="firstName2" name="firstName" />
    </label>
    <label nested>
      Last Name
      <input type="text" id="lastName2" name="lastName" />
    </label>
    <br />
    <label className="position-right" htmlFor="vehicleBike2">
      I own a Bike
    </label>
    <input type="checkbox" id="vehicleBike2" name="vehicleBike" />
    <br />
    <label className="position-right" htmlFor="vehicleBoat2">
      I own a Boat
    </label>
    <input type="checkbox" id="vehicleBoat2" name="vehicleBoat" />
    <br />
    <label className="position-right" htmlFor="vehicleCar2">
      I own a Car
    </label>
    <input type="checkbox" id="vehicleCar2" name="vehicleCar" />
    <br />
  </fieldset>
</form>
         `}
      </CodeDisplay>
    </Fragment>
  );
};
export default LabelPositioning;
