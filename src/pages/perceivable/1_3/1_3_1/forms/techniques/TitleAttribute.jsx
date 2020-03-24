import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const TitleAttribute = () => {
  return (
    <Fragment>
      <p>
        In some cases, a visual design does not allow for an actual visual label
        to be used. While a visual user may be able to understand the
        information based on other item&apos;s positioning, that is not the case
        for a non-sighted user.
      </p>
      <h2>Use an off-left positioned label</h2>
      <p>
        Labels can be hidden with a CSS technique known as off-left. All rules
        for a label are still required except they cannot nest the associated
        input. Off-left labels must be associated with the input by the id
        attribute.
      </p>
      <form>
        <label className="sr-only" htmlFor="search">
          Search by name, keyword or tag
        </label>
        <input type="search" id="search" name="search" placeholder="Search" />
        <button type="button" className="btn btn-primary btn-search">
          Submit
        </button>
      </form>
      <p>
        Note how the actual label is not available in the search form visually.
        However a screen reader will pick it up and associate it with the input.
        A placeholder is added, but does not count as a label for accessibility
        purposes.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="hidden label associated with a form control."
      >{`
<form>
  <label className="sr-only" htmlFor="search">
    Search by name, keyword or tag
  </label>
  <input type="search" id="search" name="search" placeholder="Search" />
  <button type="button" className="btn btn-primary btn-search">Submit</button>
</form>
      `}</CodeDisplay>
      <h3>Controls within a Table</h3>{' '}
      <p>
        A common need for hidden labels is when we have controls such as radio
        buttons or check boxes within a table. We not only need a label there,
        but also to associate it with the item being chosen.
      </p>
      <table>
        <thead>
          <tr>
            <th scope="col">Choose</th>
            <th scope="col">Item</th>
            <th scope="col">Colors</th>
            <th scope="col">Shape</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="center">
              <label className="sr-only" htmlFor="knob-puzzle">
                Choose Knob Puzzle
              </label>
              <input type="checkbox" id="knob-puzzle" name="choose" value="3" />
            </td>
            <th scope="row">Knob Puzzle</th>
            <td>Pastel</td>
            <td>Round</td>
          </tr>
          <tr className="even">
            <td className="center">
              <label className="sr-only" htmlFor="blocks">
                Choose Blocks
              </label>
              <input type="checkbox" id="blocks" name="choose" value="2" />
            </td>
            <th scope="row">Blocks</th>
            <td>Primary</td>
            <td>Squares</td>
          </tr>
          <tr>
            <td className="center">
              <label className="sr-only" htmlFor="cylinders">
                Choose Cylinders
              </label>
              <input type="checkbox" id="cylinders" name="choose" value="1" />
            </td>
            <th scope="row">Cylinders</th>
            <td>Blue, Purple and Orange</td>
            <td>Short Spheres</td>
          </tr>
        </tbody>
      </table>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="hidden label associated with a form controls inside of tables."
      >{`
<table>
  <thead>
    <tr>
      <th scope="col">Choose</th>
      <th scope="col">Item</th>
      <th scope="col">Colors</th>
      <th scope="col">Shape</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="center">
        <label className="sr-only" htmlFor="knob-puzzle">
          Choose Knob Puzzle
        </label>
        <input type="checkbox" id="knob-puzzle" name="choose" value="3" />
      </td>
      <th scope="row">Knob Puzzle</th>
      <td>Pastel</td>
      <td>Round</td>
    </tr>
    <tr className="even">
      <td className="center">
        <label className="sr-only" htmlFor="blocks">
          Choose Blocks
        </label>
        <input type="checkbox" id="blocks" name="choose" value="2" />
      </td>
      <th scope="row">Blocks</th>
      <td>Primary</td>
      <td>Squares</td>
    </tr>
    <tr>
      <td className="center">
        <label className="sr-only" htmlFor="cylinders">
          Choose Cylinders
        </label>
        <input type="checkbox" id="cylinders" name="choose" value="1" />
      </td>
      <th scope="row">Cylinders</th>
      <td>Blue, Purple and Orange</td>
      <td>Short Spheres</td>
    </tr>
  </tbody>
</table>
      `}</CodeDisplay>
      <h2>(Don&apos;t) Use the Title Attribute</h2>
      <p>
        The W3C also recommends using a title attribute in place of a label
        since a screen reader will pick it up and a mouse user can hover over
        the item to also receive the information. However I believe that leaves
        out sighted keyboard (and mobile) users and should be avoided.
      </p>
    </Fragment>
  );
};
export default TitleAttribute;
