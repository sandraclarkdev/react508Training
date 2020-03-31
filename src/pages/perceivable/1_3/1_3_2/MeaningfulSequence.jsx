import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';

import Linearize from './techniques/Linearize';
import DomOrder from './techniques/DomOrder';
import CSSPositioning from './techniques/CSSPositioning';
import LetterSpacing from './techniques/LetterSpacing';

const MeaningfulSequence = () => {
  return (
    <Fragment>
      <h1>1.3.2 Meaningful Sequence</h1>
      <p>
        Meaningful Sequence means preserving the sequence in which a web page is
        read in order to understand the meaning correctly. All of the content on
        pages is broken down into sections. Global Menu, Secondary Navigation,
        content. The intent of this criteria is to make sure that it is
        presented in an understandable way even if the content is read
        programmatically and not visually.
      </p>
      <p>
        The best way to check this is to Linearize the page, which removes all
        layout and displays the DOM order. This is slightly different than
        disabling CSS since it also removes tabled layout.
      </p>
      <Accordion>
        <AccordionItem title="Make Dom Order Match Visual Order">
          <DomOrder />
        </AccordionItem>
        <AccordionItem title="Check DOM Order by Linearizing your Page">
          <Linearize />
        </AccordionItem>
        <AccordionItem title="Apply CSS onto Structured elements for all Positioning ">
          <CSSPositioning />
        </AccordionItem>
        <AccordionItem title="Letter Spacing">
          <LetterSpacing />
        </AccordionItem>
      </Accordion>
    </Fragment>
  );
};
export default MeaningfulSequence;
