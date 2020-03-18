import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const TableComplexAssociation = () => {
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
      <p>
        As you can see from the table example, heading cells are identified by
        an id, and then relationships between heading and table cells are
        managed by grouping those ids in the headers attribute. Note that visual
        separation has been added for sighted-users to emphasize the groupings
        as well.
      </p>
      <p>This example also adds captioning and summary information.</p>
      <h2>Associating Cells (Simple) Example</h2>
      <table className="complex-table" aria-describedby="table-desc">
        <caption>Color Names in Multiple Languages (Romance vs Celtic)</caption>
        <thead>
          <tr className="grouped-headers">
            <th id="fam">Family</th>
            <th id="rmc" colSpan="2" className="separate">
              Romance Language
            </th>
            <th id="cel" colSpan="2" className="separate">
              Celtic Language
            </th>
          </tr>
          <tr className="secondary-headers">
            <th headers="hue">Color</th>
            <th headers="rmc" id="es" className="separate">
              Spanish
            </th>
            <th headers="rmc" id="fr">
              French
            </th>
            <th headers="cel" id="ga" className="separate">
              Irish
            </th>
            <th headers="cel" id="cy">
              Welsh
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th headers="hue" id="green">
              Green
            </th>
            <td lang="es" headers="rmc es green" className="separate">
              verde
            </td>
            <td lang="fr" headers="rmc fr green">
              vert
            </td>
            <td lang="ga" headers="cel ga green" className="separate">
              glas
            </td>
            <td lang="cy" headers="cel cy green">
              gwyrdd
            </td>
          </tr>
          <tr>
            <th headers="hue" id="blue">
              Blue
            </th>
            <td lang="es" headers="rmc es blue" className="separate">
              azul
            </td>
            <td lang="fr" headers="rmc fr blue">
              bleu
            </td>
            <td lang="ga" headers="cel ga blue" className="separate">
              gorm
            </td>
            <td lang="cy" headers="cel cy blue">
              glas
            </td>
          </tr>
          <tr>
            <th headers="hue" id="black">
              Black
            </th>
            <td lang="es" headers="rmc es black" className="separate">
              negro
            </td>
            <td lang="fr" headers="rmc fr black">
              noir
            </td>
            <td lang="ga" headers="cel ga black" className="separate">
              dubh
            </td>
            <td lang="cy" headers="cel cy black">
              du
            </td>
          </tr>
        </tbody>
      </table>
      <p id="table-desc" className="hidden">
        Color names for black, blue, and green in multiple languages, grouped by
        language family
      </p>
      <CodeDisplay
        codeType="multi"
        codeDescription="associating cells with rows and columns through ids and the headers attribute"
      >{`
<table className="complex-table" aria-describedby="table-desc">
  <caption>Color Names in Multiple Languages (Romance vs Celtic)</caption>
  <thead>
    <tr className="grouped-headers">
      <th id="fam">Family</th>
      <th id="rmc" colSpan="2" className="separate">
        Romance Language
      </th>
      <th id="cel" colSpan="2" className="separate">
        Celtic Language
      </th>
    </tr>
    <tr className="secondary-headers">
      <th headers="hue">Color</th>
      <th headers="rmc" id="es" className="separate">
        Spanish
      </th>
      <th headers="rmc" id="fr">
        French
      </th>
      <th headers="cel" id="ga" className="separate">
        Irish
      </th>
      <th headers="cel" id="cy">
        Welsh
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th headers="hue" id="green">
        Green
      </th>
      <td lang="es" headers="rmc es green" className="separate">
        verde
      </td>
      <td lang="fr" headers="rmc fr green">
        vert
      </td>
      <td lang="ga" headers="cel ga green" className="separate">
        glas
      </td>
      <td lang="cy" headers="cel cy green">
        gwyrdd
      </td>
    </tr>
    <tr>
      <th headers="hue" id="blue">
        Blue
      </th>
      <td lang="es" headers="rmc es blue" className="separate">
        azul
      </td>
      <td lang="fr" headers="rmc fr blue">
        bleu
      </td>
      <td lang="ga" headers="cel ga blue" className="separate">
        gorm
      </td>
      <td lang="cy" headers="cel cy blue">
        glas
      </td>
    </tr>
    <tr>
      <th headers="hue" id="black">
        Black
      </th>
      <td lang="es" headers="rmc es black" className="separate">
        negro
      </td>
      <td lang="fr" headers="rmc fr black">
        noir
      </td>
      <td lang="ga" headers="cel ga black" className="separate">
        dubh
      </td>
      <td lang="cy" headers="cel cy black">
        du
      </td>
    </tr>
  </tbody>
</table>
<p id="table-desc" className="hidden">
  Color names for black, blue, and green in multiple languages, grouped by
  language family
</p>
      `}</CodeDisplay>
    </Fragment>
  );
};
export default TableComplexAssociation;
