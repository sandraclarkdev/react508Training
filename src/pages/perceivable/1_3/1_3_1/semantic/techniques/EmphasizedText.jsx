import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';

import { StrongText, QuoteCite, SuperSubScript } from './index';

const EmphasizedText = () => {
  return (
    <Fragment>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <Accordion>
            <AccordionItem title="Strong and Emphasized Text">
              <StrongText />
            </AccordionItem>
            <AccordionItem title="Blockquote and Cite">
              <QuoteCite />
            </AccordionItem>
            <AccordionItem title="SubScript and SuperScript">
              <SuperSubScript />
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Fragment>
  );
};
export default EmphasizedText;
