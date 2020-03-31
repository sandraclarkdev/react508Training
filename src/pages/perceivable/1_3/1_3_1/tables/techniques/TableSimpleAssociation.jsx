import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const TableSimpleAssociation = () => {
  return (
    <Fragment>
      <p>
        A non-sighted user needs to know where they are in the table. Unlike the
        visual user, they need to know what row and column they are in. We do
        this by making sure that we create a heading row via &lt;thead /&gt; and
        label individual headers with &lt;th /&gt;. Individual headers may be
        associated with either a row or column.
      </p>
      <p>
        Associating cells is done on the &lt;th /&gt; tag using the
        &quot;scope&quot; attribute. This attribute may be set to either
        &quot;col&quot; or &quot;row&quot;
      </p>
      <p>
        Table cell headers may be used within &lt;tbody &gt;, if you don&apos;t
        want them to show up as bold visually, than simply style them via CSS.
      </p>
      <h2>Associating Cells (Simple) Example</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Colors</th>
            <th scope="col">Shape</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Knob Puzzle</th>
            <td>Pastel</td>
            <td>Round</td>
          </tr>
          <tr className="even">
            <th scope="row">Blocks</th>
            <td>Primary</td>
            <td>Squares</td>
          </tr>
          <tr>
            <th scope="row">Cylinders</th>
            <td>Blue, Purple and Orange</td>
            <td>Short Spheres</td>
          </tr>
        </tbody>
      </table>
      <CodeDisplay
        codeType="multi"
        codeDescription="associating cells with rows and columns through the scope attribute"
      >{`
<table>
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Colors</th>
      <th scope="col">Shape</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Knob Puzzle</th>
      <td>Pastel</td>
      <td>Round</td>
    </tr>
    <tr className="even">
      <th scope="row">Blocks</th>
      <td>Primary</td>
      <td>Squares</td>
    </tr>
    <tr>
      <th scope="row">Cylinders</th>
      <td>Blue, Purple and Orange</td>
      <td>Short Spheres</td>
    </tr>
  </tbody>
</table>
      `}</CodeDisplay>
    </Fragment>
  );
};
export default TableSimpleAssociation;
