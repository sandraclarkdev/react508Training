import React, { Fragment } from 'react';

import GroupingSections from './GroupingSections';
import NestingFieldsets from './NestingFieldsets';
import GroupingOptions from './GroupingOptions';

const ElementGrouping = () => {
  return (
    <Fragment>
      <p>
        When creating a form, we need to group like items together using
        Semantic Elements to indicate they are related. We do this using the
        &lt;fieldset &gt;&lt;legend /&gt;&lt;/fieldset&gt; combination.
      </p>
      <p>There are a few things we need to understand regarding groupings: </p>
      <ol>
        <li>
          When moving through a form, for most users of{' '}
          <abbr
            title="Accessible Technology"
            aria-label="Accessible Technology"
          >
            AT
          </abbr>
          , headings are not read, but the fieldset legend&apos;s are.
        </li>
        <li>
          While fieldsets may be nested,{' '}
          <abbr
            title="Accessible Technology"
            aria-label="Accessible Technology"
          >
            AT
          </abbr>{' '}
          will only read the fieldset in which the control resides.
        </li>
      </ol>
      <p>
        We definitely need to group controls for radio buttons and checkboxes
        that will submit values for a single named field. We should also be
        grouping like items with hidden (off-left) legends to make groupings
        more accessible to non-sighted users.
      </p>
      <p>
        Not every grouping of radio buttons and checkboxes need to be in a
        fieldset. If they are all named differently and have enough information
        in their labels and other instructions we can forego the fieldset.
      </p>
      <p>
        A good rule of thumb is that when a group of controls within a form
        requires a heading, use the &lt;fieldset &gt;&lt;legend
        /&gt;&lt;/fieldset&gt;.
      </p>
      <GroupingSections />
      <NestingFieldsets />
      <GroupingOptions />
    </Fragment>
  );
};
export default ElementGrouping;
