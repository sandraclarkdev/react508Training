import React, { Fragment } from 'react';
import { AnchorLinks, BackToTopLink } from 'components/Links';

const PageName = () => {
  return (
    <Fragment>
      <AnchorLinks />
      <h1>Title</h1>
      <p>Title Info</p>
      <h2>Criteria </h2>
      <section id="overview">
        <h2>Overview</h2>
        <p>
          <a
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
            target="blank"
            aria-describedby="openNewWindow"
          >
            Understanding Criteria
          </a>
        </p>
      </section>

      <section id="techniques">
        <h2>Techniques</h2>

        <BackToTopLink />
      </section>
      <section id="#general">
        <h3>General and HTML Techniques</h3> <BackToTopLink />
      </section>
      <section id="#aria">
        <h3>Aria Techniques</h3> <BackToTopLink />
      </section>
    </Fragment>
  );
};

export default PageName;
