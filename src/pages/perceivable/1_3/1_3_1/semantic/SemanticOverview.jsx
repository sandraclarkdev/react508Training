import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';

import { RequiredFormFields, EmphasizedText } from './techniques';

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
          <div className="bx--row">
            <div className="bx--col-lg-12">
              <p>
                It is quite common to show a red asterisk next to a required
                form field. The issue is that for a non-sighted users, the
                asterisk doesn&apos;t mean much and could be overlooked.
              </p>
              <p>
                We need to use a combination of both aria attributes and an
                off-left CSS technique to make the information available to
                everyone in the way that best conveys the information to each
                type of user.
              </p>
            </div>
          </div>
          <RequiredFormFields />
        </AccordionItem>
      </Accordion>
      <div className="bx--row">
        <div className="bx--col-lg-12">
          <h5>Emphasizing Text Structurally</h5>
          <p>
            We tend to think about emphasizing text via visual cues only. But
            HTML allows us to emphasize text via specific HTML tags which will
            allow AT to also emphasize by either using a different physical
            representation or possibly changing a voice or audio cue to give
            auditory emphasis as well.
          </p>
          <p>
            These elements are lesser known, but should be used when the intent
            is to emphasize the structure of the text.
          </p>
        </div>
      </div>
      <EmphasizedText />
    </Fragment>
  );
};

export default SemanticOverview;
