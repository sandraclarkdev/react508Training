import React, { Fragment } from 'react';
import SubNav from '../../SubNav';

import { NonTextPageRoutes } from 'routes/';

const NonTextHomePage = () => {
  return (
    <Fragment>
      <h1>1.1.1 Non Text Content</h1>
      <p>
        <strong>1.1.1 Non-text Content</strong>: All non-text content that is
        presented to the user has a text alternative that serves the equivalent
        purpose, except for the situations listed below. (Level A)
      </p>
      <ul>
        <li>
          Controls, Input: If non-text content is a control or accepts user
          input, then it has a name that describes its purpose. (Refer to
          Guideline 4.1 for additional requirements for controls and content
          that accepts user input.)
        </li>
        <li>
          Time-Based Media: If non-text content is time-based media, then text
          alternatives at least provide descriptive identification of the
          non-text content. (Refer to Guideline 1.2 for additional requirements
          for media.)
        </li>
        <li>
          Test: If non-text content is a test or exercise that would be invalid
          if presented in text, then text alternatives at least provide
          descriptive identification of the non-text content.
        </li>
        <li>
          Sensory: If non-text content is primarily intended to create a
          specific sensory experience, then text alternatives at least provide
          descriptive identification of the non-text content.
        </li>
        <li>
          CAPTCHA: If the purpose of non-text content is to confirm that content
          is being accessed by a person rather than a computer, then text
          alternatives that identify and describe the purpose of the non-text
          content are provided, and alternative forms of CAPTCHA using output
          modes for different types of sensory perception are provided to
          accommodate different disabilities.
        </li>
        <li>
          Decoration, Formatting, Invisible: If non-text content is pure
          decoration, is used only for visual formatting, or is not presented to
          users, then it is implemented in a way that it can be ignored by
          assistive technology.
        </li>
      </ul>
      <h2>Techniques</h2>
      <SubNav />
      <NonTextPageRoutes />
    </Fragment>
  );
};

export default NonTextHomePage;
