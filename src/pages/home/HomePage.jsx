import React, { Fragment } from 'react';
import { ExternalLink } from 'components/Links';

const HomePage = () => (
  <Fragment>
    <h1>Home Page</h1>
    <p>
      This website is designed to help you understand the accessibility
      requirements and how to use them within React. The application is set up
      itself as an accessible code base that will become more and more usable as
      more gets added. Each time a guideline is completed, the code base will be
      tagged to display where it was at the beginning of the project.
    </p>
    <p>
      Section 508 requires an adherence to{' '}
      <ExternalLink to="https://www.w3.org/WAI/WCAG21/quickref/?showtechniques=242%2C246&currentsidebar=%23col_overview&versions=2.0#top">
        WCAG 2.0
      </ExternalLink>
      Many of the requirements are difficult to understand and even harder to
      know how to implement in an SPA like React (which has its own
      challenges.). This web application is designed to be accessible in
      it&#39;s own right, and both explains and implements proper 508 behaviors
      to be as accessible as possible.
    </p>
    <p>
      The WCAG 2.0 requirement have 4 Principles commonly called POUR:
      Perceivable, Operable, Understandable and Robust. The principles and
      guidelines are purposefully vague to enable them to be applied to existing
      and future technology.
    </p>
    <p> I hope this application proves of use.</p>
  </Fragment>
);
export default HomePage;
