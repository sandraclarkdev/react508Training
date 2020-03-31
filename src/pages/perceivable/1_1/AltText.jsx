import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import URIS from 'libraries/constants/uri-constants';

const AltText = () => {
  return (
    <Fragment>
      <h1>1.1 - Text Alternatives</h1>
      <p>
        The purpose of the text alternatives guideline is to make sure that all
        relevant non-text content is available in a way that allows{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        render it in the way best suited to a user. This can be visually,
        auditorally (screen readers) or tactically (braille). If the non-text
        content is not relevant to the page at all, it should be hidden from AT.
      </p>
      <h2>Success Criteria</h2>
      <p>
        Each Guideline has one or more success criteria that guarantees that the
        guideline is met. There are three levels for success criteria (A, AA and
        AAA). 508 regulations require that all pages conform to both A and AA
        only.
      </p>
      <section id="wcag111">
        <h3>1.1.1 Non Text Content (Level A)</h3>
        <p>
          <Link to={URIS.URI_PERCEIVABLE_TEXTALT_NONTEXT}>
            1.1.1 Non Text Content{' '}
          </Link>
          is the only Success criteria for 1.1. It requires that all non-text
          content that is presented to the user has a text alternative that
          serves the equivalent purpose <strong>except </strong>
          when the non-text input is used only for visual formatting or is
          purely decorative, in which case it should be hidden from assistive
          technology
        </p>
      </section>
    </Fragment>
  );
};

export default AltText;
