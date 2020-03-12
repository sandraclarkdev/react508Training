import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';

import { RequiredFormFields } from 'components/Examples';

const SemanticOverview = () => {
  return (
    <Fragment>
      <h4>Semantics</h4>
      <p>
        Almost every structural element within the HTML specification is there
        to add semantic meaning and structure to web content. Those items
        aren&apos;t there just to aid in visual changes, they allow screen
        readers, braille translators and other AT to know they must change the
        way something is perceived to add that meaning.
      </p>
      <p>
        Appropriate semantic elements aid in emphasizing the meaning of the
        content. As well, relationships between items of content can also be
        indicated through this semantic markup. Relationships between headers,
        or table cells. AT can indicate that information by linking it or using
        a different voice or pitch in a screen reader for example.
      </p>

      <h5>Color Cues</h5>
      <p>
        While we aren&apos;t supposed to use color as the only way to identify a
        subject, we can still use it in conjunction with other techniques to
        allow for those cues to have a semantic meaning underlying their
        importance.{' '}
      </p>
      <Accordion>
        <AccordionItem title="Emphasizing Required Form Fields">
          <RequiredFormFields />
        </AccordionItem>
      </Accordion>
      <h5>Emphasized Text</h5>
    </Fragment>
  );
};

export default SemanticOverview;
