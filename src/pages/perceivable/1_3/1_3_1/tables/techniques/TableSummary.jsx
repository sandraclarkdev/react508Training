import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const TableSummary = () => {
  return (
    <Fragment>
      <p>
        A summary of the table details a brief overview of how data in the table
        is organized or a brief explanation of how to navigate the table. The
        original attribute did not show this information visually, it was only
        accessible via{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>
        . While{' '}
        <abbr
          title="Hypertext Markup Language 5"
          aria-label="Hypertext Markup Language 5"
        >
          HTML5
        </abbr>{' '}
        has removed the table summary attribute from the specification we still
        need to expose this information for non-sighted users. . Instead, use
        aria-description to attach a description. <strong>Note: </strong> A
        summary is not required for every table, only those tables which contain
        data that has to be explained.
      </p>
      <h2>Table Description Example</h2>
      <table aria-describedby="table-description">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Colors</th>
            <th scope="col">Shape</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Knob Puzzle</td>
            <td>Pastel</td>
            <td>Round</td>
          </tr>
          <tr className="even">
            <td>Blocks</td>
            <td>Primary</td>
            <td>Squares</td>
          </tr>
          <tr>
            <td>Cylinders</td>
            <td>Blue, Purple and Orange</td>
            <td>Short Spheres</td>
          </tr>
        </tbody>
      </table>
      <div id="table-description" className="sr-only">
        Table displays different toddler toys with columns detailing the color
        and shape.
      </div>
      <CodeDisplay
        codeType="multi"
        codeDescription="attaching a summary description to a table using aria-describedby"
      >{`
<table aria-describedby="table-description">
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Colors</th>
      <th scope="col">Shape</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Knob Puzzle</td>
      <td>Pastel</td>
      <td>Round</td>
    </tr>
    <tr className="even">
      <td>Blocks</td>
      <td>Primary</td>
      <td>Squares</td>
    </tr>
    <tr>
      <td>Cylinders</td>
      <td>Blue, Purple and Orange</td>
      <td>Short Spheres</td>
    </tr>
  </tbody>
</table>
<div id="table-description" className="sr-only">
  Table displays different toddler toys with columns detailing the color
  and shape.
</div>
      `}</CodeDisplay>
    </Fragment>
  );
};
export default TableSummary;
