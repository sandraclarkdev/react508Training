import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';
import LabelPositioning from './techniques/LabelPositioning';
import LabelElements from './techniques/LabelElements';
import TitleAttribute from './techniques/TitleAttribute';
import ElementGrouping from './techniques/ElementGrouping';
import RequiredFields from './techniques/RequiredFields';

const FormOverview = () => {
  return (
    <Fragment>
      <h4>Form Markup</h4>
      <p>
        Forms are the life-blood of the IQIES application, they represent most
        of our pages. It is up to us to make our forms as accessible as
        possible. In accordance with the guidance of 1.3.1 Info and
        Relationships, we first turn to proper structure.
      </p>
      <p>
        Every form control needs to be labeled. For the most part that will mean
        adding a &lt;label /&gt; tag and associating it with the control. Not
        all form controls will support a label, so we will need to make sure we
        can add information in that will allow us to pass identifying
        information into the control. This means that any third-party library
        components we add, should have a comprehensive accessibility check to
        make sure we can create an entire form which is accessible.
      </p>
      <Accordion>
        <AccordionItem title="Label Elements">
          <LabelElements />
        </AccordionItem>
        <AccordionItem title="Positioning Labels">
          <LabelPositioning />
        </AccordionItem>

        <AccordionItem title="Hidden Labels">
          <TitleAttribute />
        </AccordionItem>
        <AccordionItem title="Grouping Elements">
          <ElementGrouping />
        </AccordionItem>
        <AccordionItem title="Labeling Required Fields">
          <RequiredFields />
        </AccordionItem>
      </Accordion>
    </Fragment>
  );
};
export default FormOverview;
