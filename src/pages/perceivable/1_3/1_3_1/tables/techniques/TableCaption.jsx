import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const TableCaption = () => {
  return (
    <Fragment>
      <p>
        Captions are usually smaller blocks of text than summaries and are
        visible to all users. You can use CSS to determine where the caption is
        placed in relation to the table by using caption-side: top/bottom.
      </p>
      <p>
        Captions may be used in conjunction with summaries or by themselves.
      </p>
      <h2>Table Caption Example</h2>
      <table>
        <caption>Shopping Cart of Toddler Puzzles</caption>
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
      <CodeDisplay codeType="multi" codeDescription="using caption on a table">
        {`
<table>
  <caption>Shopping Cart of Toddler Puzzles</caption>
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
</table
            `}
      </CodeDisplay>
    </Fragment>
  );
};
export default TableCaption;
