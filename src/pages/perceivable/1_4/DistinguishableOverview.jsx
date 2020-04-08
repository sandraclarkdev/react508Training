import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import URIS from 'libraries/constants/uri-constants';

const DistinguishableOverview = () => {
  return (
    <Fragment>
      <h1>1.4 - Distinguishable</h1>
      <p>
        Create content that can be presented in different ways without losing
        information or structure.
      </p>
      <p>
        The basics of this guideline are to ensure that the default presentation
        is made as easy to perceive as possible for people with disabilities.
        Primary focus is on making it easy to perceive the foreground
        information as separate from the background. Visually this means making
        sure the information presented contrasts enough with the background to
        be seen by users with color-blindness. The guideline also covers audio
        separation, but as iQies does not transmit information in an audio
        format we will not be focusing on that aspect.
      </p>

      <h2>Success Criteria for 1.4 Distinguishable</h2>
      <p>
        Each Guideline has one or more success criteria that guarantees that the
        guideline is met. There are three levels for success criteria (A, AA and
        AAA). 508 regulations require that all pages conform to both A and AA
        only.
      </p>
      <h3>
        <Link to={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_COLOR}>
          1.4.1 Use of Color (Level A)
        </Link>
      </h3>
      <p>
        Color is not used as the only visual means of conveying information,
        indicating an action, prompting a response or distinguishing a visual
        element.
      </p>
      <h3>1.4.2 Audio Control (Level A)</h3>
      <p>
        <strong>(Not used in IQIES at this time)</strong> - If any audio on a
        Web page plays automatically for more than 3 seconds, either a mechanism
        is available to pause or stop the audio, or a mechanism is available to
        control audio volume independently from the overall system volume level.
      </p>
      <h3>
        <Link to={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_CONTRAST}>
          1.4.3 Contrast (Minimum) (Level AA)
        </Link>
      </h3>
      <p>
        The visual presentation of text and images of text has a contrast ration
        of at least 4.5:1 with certain exceptions
      </p>
      <h3>
        <Link to={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_RESIZE}>
          1.4.4 Resize Text (Level AA)
        </Link>
      </h3>
      <p>
        Except for captions and images of text, text can be resized without
        assistive technology up to 200 percent without loss of content or
        functionality.
      </p>
      <h3>
        <Link to={URIS.URI_PERCEIVABLE_DISTINGUISHABLE_TEXTIMAGES}>
          1.4.5 Image of Text (Level AA)
        </Link>
      </h3>
      <p>
        If the technologies being used can achieve the visual presentation, text
        is used to convey information rather than images of text with certain
        exceptions.
      </p>
    </Fragment>
  );
};

export default DistinguishableOverview;
