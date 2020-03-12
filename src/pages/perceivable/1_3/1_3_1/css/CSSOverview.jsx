import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';

const CSSOverview = () => {
  return (
    <Fragment>
      <h4>Use CSS for all Presentation</h4>
      <p>
        All visual presentation that can be accommodated in CSS should be. This
        separates the presentation from the structure in a way most compatible
        with AT. This is not to say that AT doesn&apos;t interact with CSS at
        all, (it does read it and honor some properties such as
        &#34;display:none&#34;), but for the most part, we can create our pages
        so that HTML provides the structure and semantics and CSS displays them.
      </p>
      <p>
        This means that we care more about how our page is initially structured
        than how it looks with CSS.
      </p>
      <Accordion>
        <AccordionItem title="Headings are Essential" />
      </Accordion>
    </Fragment>
  );
};

export default CSSOverview;
