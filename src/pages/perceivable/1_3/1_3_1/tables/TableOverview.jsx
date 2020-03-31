import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';

import TableCaption from './techniques/TableCaption';
import TableSummary from './techniques/TableSummary';
import TableSimpleAssociation from './techniques/TableSimpleAssociation';
import TableComplexAssociation from './techniques/TableComplexAssociation';

const TableOverview = () => {
  return (
    <Fragment>
      <h4>Table Markup</h4>
      <p>
        We&apos;ve come a long way from the time web developers used tables to
        layout web pages, but there is still confusion on how to properly
        structure tables to give as much information as possible to non-sighted
        users. Depending on what the table is showing we need to let the user
        know what is in the table via a summary and/or caption, and we need to
        associate the cells with the information in rows with the proper
        headings.
      </p>
      <p>
        A properly structured table will allow{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        to access the information in a way that makes it easy for a non-sighted
        user to move through the table. Screen readers such as Jaws have special
        keyboard commands which allow rapid navigation throughout the table and
        the ability for non-sighted users to know where they are.
      </p>
      <Accordion>
        <AccordionItem title="Proper Table Markup">
          <p>
            Most developers are aware of the basics of table markup. It&apos;s
            important to place the column headers (&lt;th /&gt;) within a
            &lt;thead /&gt; tag and any footer information for a table in the
            &lt;tfoot /&gt;. All of the actual information in a table should be
            in the &lt;tbody /&gt; grouping (&lt;td /&gt; and &lt;th /&gt;).
          </p>
        </AccordionItem>
        <AccordionItem title="Table Summary">
          <TableSummary />
        </AccordionItem>
        <AccordionItem title="Table Captions">
          <TableCaption />
        </AccordionItem>
        <AccordionItem title="Associating cells with Headers (simple tables)">
          <TableSimpleAssociation />
        </AccordionItem>
        <AccordionItem title="Associating cells with Headers (complex tables)">
          <TableComplexAssociation />
        </AccordionItem>
      </Accordion>
    </Fragment>
  );
};
export default TableOverview;
