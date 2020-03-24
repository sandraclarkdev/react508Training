import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const CombinedLongShortText = () => {
  return (
    <Fragment>
      <p>
        There are situations where we need more than a short description of
        Text. Things like charts, diagrams or explanations that are conveyed via
        images such as how to complete a task. In these cases, the proper way to
        deal with this information is to have a brief description of the text
        content as detailed in the short Text Descriptions as well as a long
        description in aria-describedby.
      </p>
      <p>
        When it comes to charts and diagrams, it is imperative to describe what
        a visually sighted user can glean from the chart. This means a lot of
        heavy lifting for dynamic charts that change according to the data.
        Static charts are easier, because someone can simply define the
        information and place it into the proper description.
      </p>
      <p>
        The simplest and best way to do this is to use{' '}
        <abbr title="Accessible Rich Internet Applications">ARIA</abbr> In this
        situation both the alt attribute (for the short description) and
        aria-describedby (for the longer description) is recommended.
      </p>
      <img
        width="25%"
        src={`${process.env.PUBLIC_URL}/assets/images/WebBrowserUsage.png`}
        alt="Web Browser Shares"
        aria-describedby="web-browser-detail"
      />
      <div id="web-browser-detail" className="sr-only">
        Web Browser usage shows the following: <br />
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
      </div>
      <CodeDisplay
        id="long-desc"
        codeType="multi"
        codeDescription="Code for long descriptions using aria-label and aria-describedby"
      >
        {`
<img
  width="25%"
  src='assets/images/WebBrowserUsage.png'}
  alt="Web Browser Shares"
  aria-describedby="web-browser-detail"
/>
<div id="web-browser-detail" className="sr-only">
  Web Browser usage shows the following:<br />
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
</div>
`}
      </CodeDisplay>
    </Fragment>
  );
};
export default CombinedLongShortText;
