import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { AnchorLink, AnchorLinks, BackToTopLink } from 'components/Links';
import URIs from 'libraries/constants/uri-constants';

const pageAnchors = [
  { href: '#overview', title: 'Overview' },
  { href: '#shortText', title: 'Short Text Description (Scenario 1)' },
  { href: '#longText', title: 'Long Text Description (Scenario 2)' },
  {
    href: '#control',
    title: 'Non Text is a control/accepts user input (Scenario 3)',
  },
  { href: '#time', title: 'Non Text is Time Media Based (Scenario' },
];

const PerceivableTextAlt = () => {
  return (
    <Fragment>
      <AnchorLinks pageAnchors={pageAnchors} />
      <h1>1.1 - Text Alternatives</h1>
      <p>
        There is only one criterion for 1.1 so all information will be on this
        page.
      </p>
      <h2>1.1.1 Non-Text Content (Level A) </h2>
      <section id="overview">
        <h2>Overview</h2>
        <p>
          <a
            href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"
            target="blank"
            aria-describedby="openNewWindow"
          >
            Understanding 1.1.1
          </a>
        </p>
        <p>
          <BackToTopLink />
        </p>
      </section>

      <section id="situations">
        <p>
          There are four separate situations that are covered within 1.1.1 Non
          Text Content. They are:
        </p>
        <ol>
          <li>
            <AnchorLink href="#shortText">Short Text</AnchorLink> - Short text
            descriptions can serve the same purpose and same information as
            non-text content.
          </li>
          <li>
            <AnchorLink href="#longText">Long Text</AnchorLink> - Short
            descriptions cannot serve the same purpose or present the same
            information as non-text content such as a chart or diagram
          </li>
          <li>
            <AnchorLink href="#control">Controls and User Inputs</AnchorLink> -
            Non Text Content is a control or accepts user input.
          </li>
          <li>
            <AnchorLink href="#time">Time Based Media </AnchorLink> - Non Text
            Content is Time Media Based (media or moving content), test or
            exercise that would be invalid if presented in text or intended to
            provide a sensory experience.
          </li>
        </ol>
        <h2>Techniques</h2>
        <p>
          <BackToTopLink />
        </p>
      </section>
      <section id="shortText">
        <h3>Short Text Descriptions</h3>
        <p>
          A short text description can serve the same purpose and same
          information as non-text content.
        </p>
        <p>
          This is the most common scenario people think of when considering
          non-text content and Section 508. There are a variety of techniques
          that can be used to implement this scenario.
        </p>
        The most important key to success is that the short text alternative
        should completely convey the purpose and information of the item being
        described. If that is not possible, than both short and{' '}
        <AnchorLink href="#longText">Long Text</AnchorLink> techniques should be
        applied.
        <h4>Examples</h4>
        <p>
          <Link to={URIs.URI_PERCEIVABLE_TEXTALT_SHORT}>
            Short Description Techniques
          </Link>
        </p>
        <p>
          <BackToTopLink />
        </p>
      </section>
      <section id="longText">
        <h3>Long Text Descriptions</h3>
        <p>
          A short description can not serve the same purpose and present the
          same information as the non-text content such as a chart or diagram
        </p>
        <p>
          <Link to={URIs.URI_PERCEIVABLE_TEXTALT_LONG}>
            Long Description Techniques
          </Link>
        </p>
        <p>
          <AnchorLink href="#top-of-content">Back to Top</AnchorLink>
        </p>
      </section>
      <section id="control">
        <h3>Controls or User Inputs</h3>
        <p>The Non Text Content is a control or accepts User Input</p>
        <p>
          <Link to={URIs.URI_PERCEIVABLE_TEXTALT_CONTROLS}>
            Control and Input Techniques
          </Link>
        </p>
        <p>
          <BackToTopLink />
        </p>
      </section>
      <section id="time">
        <h3>Time Based Media</h3>
        <p>
          The Non Text Content is time based media such as live video or audio,
          or something that would be invalid if presented in text such as a test
          or exercise or is intended to create a specific sensory experience.
        </p>
        <p>
          At the moment, IQies does not incorporate any time based media in the
          application, so no techniques are being shown.
        </p>
        <p>
          <BackToTopLink />
        </p>
      </section>
    </Fragment>
  );
};

export default PerceivableTextAlt;
