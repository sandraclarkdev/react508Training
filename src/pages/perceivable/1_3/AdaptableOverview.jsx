import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import URIS from 'libraries/constants/uri-constants';

const AdaptableOverview = () => {
  return (
    <Fragment>
      <h1>1.3 - Adaptable</h1>
      <p>
        Create content that can be presented in different ways without losing
        information or structure.
      </p>
      <p>
        The basics of this guideline are to ensure that regardless of how a user
        views a particular web page that they can discern how information
        relates without reference to a particular layout. By adhering to this
        guideline the information on this page may be rendered into formats that
        many users may perceived.
      </p>
      <p>
        The success criteria for this guideline are specific to structure (how
        the page is organized) and presentation (how the content is rendered).
      </p>
      <p>
        Sighted users perceive structure and relationships through visual cues,
        headings are larger, lists have a bullet symbol at the front. Items that
        share commonalities may be arranged in rows and columns. If we only rely
        on visual cues without regard to structure we do a disservice to users
        who access the page through AT. Using color to create relationships is
        also problematic however, most of the use of color will be covered in{' '}
        <Link to={URIS.URI_PERCEIVABLE_DISTINGUISHABLE}>Guideline 1.4.1</Link>.
      </p>
      <p>
        Not all relationships can be determined programmatically, so we will
        need to add extra information to create a structure or presentation that
        helps those who cannot perceive it visually.
      </p>
      <p>
        Using Semantic, Structured Code within our pages with a focus on using
        CSS for the presentation portion is the main focus for this Guideline.
      </p>
      <h2>Success Criteria for 1.3 Adaptable</h2>
      <p>
        Each Guideline has one or more success criteria that guarantees that the
        guideline is met. There are three levels for success criteria (A, AA and
        AAA). 508 regulations require that all pages conform to both A and AA
        only.
      </p>
      <h3>1.3.1 Info and Relationships (Level A)</h3>
      <p>
        Information, structure and relationships conveyed through a visual
        presentation can be programmatically determined or available through
        text.
      </p>
      <h3>1.3.2 Meaningful Sequence (Level A)</h3>
      <p>
        When the sequence in which content is presented affects its meaning, a
        correct reading sequence can be programmatically determined.
      </p>
      <h3>1.3.3 Sensory Characteristics (Level A)</h3>
      <p>
        Instructions provided for understanding and operating content do not
        rely solely on sensory characteristics of components such as shape,
        color, size, visual location, orientation or sound.
      </p>
    </Fragment>
  );
};

export default AdaptableOverview;
