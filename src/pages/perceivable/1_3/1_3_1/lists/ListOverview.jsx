import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';
import FormView from './techniques/FormView';
import NavLinks from './techniques/NavLinks';

const ListOverview = () => {
  return (
    <Fragment>
      <h4>Lists</h4>
      <p>
        Any group of related items needs to be structured into a list.{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        has the means to allow users to go directly to lists of items, and
        allows them to know the number of items in a list as well. So it&apos;s
        important to use Semantic elements to group those lists.
      </p>
      <ul className="list">
        <li>
          &lt;ul /&gt; are for grouping unordered lists, items that conceivably
          could be in any order such as a listing of ingredients in a recipe.
        </li>
        <li>
          &lt;ol /&gt; are for grouping ordered lists, items that are dependant
          on a specific order to be understood. Recipe directions would be an
          example of an ordered list.
        </li>
        <li>
          &lt;dl /&gt; lists (definition lists) which allow for definitions
          defining terms may be used as a substitute for labels and form
          controls in a view state.{' '}
        </li>
      </ul>
      <p>
        Not all lists need to be structured as lists. A sentence that contains a
        comma separated list within a paragraph for example, does not need to be
        marked up in a semantic manner.
      </p>
      <p>
        As with anything else, lists may be styled with CSS in any visual manner
        to present the information consistently according to it&apos;s usage.
      </p>
      <Accordion>
        <AccordionItem title="Creating a View Version of a Form using DL">
          <FormView />
        </AccordionItem>
        <AccordionItem title="Grouping related links in a Nav Element">
          <NavLinks />
        </AccordionItem>
      </Accordion>
    </Fragment>
  );
};
export default ListOverview;
