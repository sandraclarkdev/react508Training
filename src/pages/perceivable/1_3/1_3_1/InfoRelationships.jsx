import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import URIS from 'libraries/constants/uri-constants';

const InfoRelationships = () => {
  return (
    <Fragment>
      <h1>1.3.1 Info and Relationships</h1>
      <p>
        This Success Criteria aims to make sure that any relationships and
        information that are implied by visual (or auditory) formatting are
        available when presented in formats that are different. This
        specifically means that the understanding of the information and the
        relationships defined should not change regardless of whether a user is
        using Assistive Technology (AT) that transforms the presentation into
        something the user can understand or if a user substitutes their own
        stylesheet for the original one that the application is using (yes, this
        happens specifically for users who choose to change contrast or colors
        but can happen with text sizes as well.)
      </p>
      <p>
        This means Structural and Semantic Markup such as headings that are
        properly structured underneath each other. Using list markup rather than
        just styling something to look like a list and clearly creating a
        semantic relationship between a label and the associated information in
        a view are necessary.
      </p>
      <h2>
        Make Information and Relationships conveyed through presentation
        programmatically determinable through semantic structure
      </h2>
      <p>
        Structural and Semantic HTML are key to allowing users with visual
        issues understand how parts of a web page relates to the other. We can
        also use ARIA techniques to enhance understanding as well.
      </p>
      <h3>Separating information and Structure from Presentation</h3>
      <ul className="item-link-nav">
        <li>
          <Link to={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_SEMANTIC}>
            Semantic HTML is the Key to Good Accessibility.
          </Link>
        </li>
        <li>
          <Link to={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_CSS}>
            Learn about Separating Structure and Presentation using CSS
          </Link>
        </li>
      </ul>
      <h3>Using Regions and Headings for Navigation and Structure</h3>
      <ul className="item-link-nav">
        <li>
          <Link to={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_REGIONS}>Regions</Link>
        </li>
        <li>
          <Link to={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_HEADINGs}>
            Headings
          </Link>
        </li>
      </ul>
      <h3>Structure with Controls, Tables, Forms and Lists</h3>
      <ul className="item-link-nav">
        <li>
          <Link to={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_CONTROLS}>
            Controls
          </Link>
        </li>
        <li>
          <Link to={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_TABLES}>Tables</Link>
        </li>
        <li>
          <Link to={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_FORMS}>Forms</Link>
        </li>
        <li>
          <Link to={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_LISTS}>Lists</Link>
        </li>
      </ul>
      <h3>How to provide information when semantic structure is unavailable</h3>
      <ul className="item-link-nav">
        <li>
          <Link to={URIS.URI_PERCEIVABLE_ADAPTABLE_INFO_TEXT}>Text</Link>
        </li>
      </ul>

      <h3>Regions</h3>
      <h4>ARia Landmarks</h4>
      <h4>Region Role</h4>
      <h4>aria-labelledby to identify Regions</h4>
      <h3>Headings</h3>
      <h4>Nesting Headings</h4>
      <h4>Using Roles</h4>
      <h3>Controls and Icons</h3>
      <h4>Identifying a font Icon</h4>
      <h4>Providing names for user interface controls</h4>
      <h4>Descriptive Labels for Controls</h4>

      <h3>Table Markup</h3>
      <h4>Table Summary Attribute</h4>
      <h4>Table Caption</h4>
      <h4>Associating cells with Headers (simple tables)</h4>
      <h4>Associating cells with Headers (complex tables)</h4>
      <h3>Form Markup</h3>
      <h4>Positioning Labels</h4>
      <h4>Labels Elements</h4>
      <h4>Title Element</h4>
      <h4>Grouping Elements</h4>
      <h4>Grouping Elements in a Select</h4>
      <h4>Required Fields</h4>
      <h3>Lists</h3>
      <h4>Grouping Lists</h4>
      <h4>Creating a View version of a Form using DL</h4>
      <h4>Grouping related links in a Nav Element</h4>
      <h2>
        What do do when you cannot use semantic structure to convey information
        and relationships.
      </h2>
      <h3>
        Information in text is conveyed through both structural formatting and
        text.
      </h3>
    </Fragment>
  );
};
export default InfoRelationships;
