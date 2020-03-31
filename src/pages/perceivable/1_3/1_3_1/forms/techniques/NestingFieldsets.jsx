import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const NestingFieldsets = () => {
  return (
    <Fragment>
      <h2>Nesting Fieldsets</h2>
      <form className="labels-left">
        <fieldset>
          <legend id="parent-personalinfo" className="h3">
            Personal Information
          </legend>
          <label htmlFor="firstName2">First Name</label>
          <input type="text" id="firstName2" name="firstName" />
          <br />
          <label htmlFor="lastName2">Last Name</label>
          <input type="text" id="lastName2" name="lastName" />
          <br />
          <fieldset className="bordered">
            <legend className="h4">Vehicles Owned Within Border</legend>
            <label className="position-right" htmlFor="vehicleBike2">
              I own a Bike
            </label>
            <input
              type="checkbox"
              id="vehicleBike2"
              name="vehicleBike"
              aria-describedby="parent-personalinfo"
            />
            <br />
            <label className="position-right" htmlFor="vehicleBoat2">
              I own a Boat
            </label>
            <input
              type="checkbox"
              id="vehicleBoat2"
              name="vehicleBoat"
              aria-describedby="parent-personalinfo"
            />
            <br />
            <label className="position-right" htmlFor="vehicleCar2">
              I own a Car
            </label>
            <input
              type="checkbox"
              id="vehicleCar2"
              name="vehicleCar"
              aria-describedby="parent-personalinfo"
            />
            <br />
          </fieldset>
          <fieldset className="bordered above">
            <legend className="h4">Vehicles Owned Above Border</legend>
            <label className="position-right" htmlFor="vehicleBike3">
              I own a Bike
            </label>
            <input
              type="checkbox"
              id="vehicleBike3"
              name="vehicleBike"
              aria-describedby="parent-personalinfo"
            />
            <br />
            <label className="position-right" htmlFor="vehicleBoat3">
              I own a Boat
            </label>
            <input
              type="checkbox"
              id="vehicleBoat3"
              name="vehicleBoat"
              aria-describedby="parent-personalinfo"
            />
            <br />
            <label className="position-right" htmlFor="vehicleCar3">
              I own a Car
            </label>
            <input
              type="checkbox"
              id="vehicleCar3"
              name="vehicleCar"
              aria-describedby="parent-personalinfo"
            />
            <br />
          </fieldset>
        </fieldset>
      </form>
      <p>
        Elements that are grouped in this way, should have a border delineating
        the grouping. You may position the legend above or within the border
        using CSS.
      </p>
      <p>
        The biggest issue with nesting is that{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        does not announce the parent fieldset. We can work around this by
        applying an id to the parent legend and referencing that id in the
        aria-describedby of the nested input fields. Note that not all browsers
        work well with Kebab case within the id attribute. use Camel case
        instead.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={2}
        codeDescription="nesting fieldsets using aria-described to announce parent fieldset"
      >{`
<form className="labels-left">
  <fieldset>
    <legend id="parent-personalinfo" className="h3">
      Personal Information
    </legend>
    <label htmlFor="firstName2">First Name</label>
    <input type="text" id="firstName2" name="firstName" />
    <br />
    <label htmlFor="lastName2">Last Name</label>
    <input type="text" id="lastName2" name="lastName" />
    <br />
    <fieldset className="bordered">
      <legend className="h4">Vehicles Owned Within Border</legend>
      <label className="position-right" htmlFor="vehicleBike2">
        I own a Bike
      </label>
      <input
        type="checkbox"
        id="vehicleBike2"
        name="vehicleBike"
        aria-describedby="parent-personalinfo"
      />
      <br />
      <label className="position-right" htmlFor="vehicleBoat2">
        I own a Boat
      </label>
      <input
        type="checkbox"
        id="vehicleBoat2"
        name="vehicleBoat"
        aria-describedby="parent-personalinfo"
      />
      <br />
      <label className="position-right" htmlFor="vehicleCar2">
        I own a Car
      </label>
      <input
        type="checkbox"
        id="vehicleCar2"
        name="vehicleCar"
        aria-describedby="parent-personalinfo"
      />
      <br />
    </fieldset>
    <fieldset className="bordered above">
      <legend className="h4">Vehicles Owned Above Border</legend>
      <label className="position-right" htmlFor="vehicleBike3">
        I own a Bike
      </label>
      <input
        type="checkbox"
        id="vehicleBike3"
        name="vehicleBike"
        aria-describedby="parent-personalinfo"
      />
      <br />
      <label className="position-right" htmlFor="vehicleBoat3">
        I own a Boat
      </label>
      <input
        type="checkbox"
        id="vehicleBoat3"
        name="vehicleBoat"
        aria-describedby="parent-personalinfo"
      />
      <br />
      <label className="position-right" htmlFor="vehicleCar3">
        I own a Car
      </label>
      <input
        type="checkbox"
        id="vehicleCar3"
        name="vehicleCar"
        aria-describedby="parent-personalinfo"
      />
      <br />
    </fieldset>
  </fieldset>
</form>
       `}</CodeDisplay>
    </Fragment>
  );
};
export default NestingFieldsets;
