import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import URIS from 'libraries/constants/uri-constants';

import CodeDisplay from 'components/Code/CodeDisplay';

const H2Example = () => {
  return (
    <Fragment>
      <h1>Long Descriptions for Images</h1>
      <p>
        There are situations where we need more than a short description of
        Text. Things like charts, diagrams or explanations that are conveyed via
        images such as how to complete a task. In these cases, the proper way to
        deal with this information is to have a brief description of the text
        content as detailed in
        <Link to={URIS.URI_PERCEIVABLE_TEXTALT_SHORT}>
          Short Text Descriptions
        </Link>{' '}
        as well as a long description in aria-describedBy.
      </p>
      <p>
        When it comes to charts and diagrams, it is imperative to describe what
        a visually sighted user can glean from the chart. This means a lot of
        heavy lifting for dynamic charts that change according to the data.
        Static charts are easier, because someone can simply define the
        information and place it into the proper description.
      </p>
      <h2>Aria Label and Aria DescribedBy</h2>
      <p>
        Using <abbr title="Accessible Rich Internet Applications">ARIA</abbr> is
        the best way to accomplish this. In this situation both aria-label (for
        the short description ) and aria-describedby (for the longer
        description) is recommended.
      </p>

      <img
        width="25%"
        src={`${process.env.PUBLIC_URL}/assets/images/WebBrowserUsage.png`}
        alt=""
        aria-label="Web Browser Shares"
        aria-describedBy="web-browser-detail"
      />
      <p id="web-browser-detail" className="hidden">
        Web Browser usage shows the following:
        <dl>
          <dt>Chrome</dt>
          <dd>29.03% </dd>
          <dt>Internet Explorer</dt>
          <dd>22.54%</dd>
          <dt>FireFox</dt>
          <dd>19.26%</dd>
          <dt>Safari</dt>
          <dd>15.59%</dd>
          <dt>Android</dt>
          <dd>4.59%</dd>
          <dt>Opera</dt>
          <dd>4.53%</dd>
          <dt>Other</dt>
          <dd>4.46%</dd>
        </dl>
      </p>
      <CodeDisplay
        codeType="multi"
        codeDescription="Code for long descriptions using aria-label and aria-describedby"
      >
        {`
<img
  width="25%"
  src='assets/images/WebBrowserUsage.png'}
  alt=""
  aria-label="Web Browser Shares"
  aria-describedBy="web-browser-detail"
/>
<p id="web-browser-detail" className="hidden">
  Web Browser usage shows the following:
    <dl>
    <dt>Chrome</dt>
    <dd>29.03% </dd>
    <dt>Internet Explorer</dt>
    <dd>22.54%</dd>
    <dt>FireFox</dt>
    <dd>19.26%</dd>
    <dt>Safari</dt>
    <dd>15.59%</dd>
    <dt>Android</dt>
    <dd>4.59%</dd>
    <dt>Opera</dt>
    <dd>4.53%</dd>
    <dt>Other</dt>
    <dd>4.46%</dd>
  </dl>
</p>
`}{' '}
      </CodeDisplay>
    </Fragment>
  );
};

export default H2Example;
