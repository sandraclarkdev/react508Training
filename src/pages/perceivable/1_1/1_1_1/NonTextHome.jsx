import React, { Fragment } from 'react';

const NonTextHome = () => {
  return (
    <Fragment>
      <h1>1.1.1 Non Text Content</h1>
      <p>
        There are four separate situations that are covered within 1.1.1 Non
        Text Content. They are:
      </p>
      <section id="short-text">
        <h2>Short Text</h2>
        <p>
          Used when short text descriptions can serve the same purpose and same
          information as non-text content.
        </p>
        <p>
          This is the most common scenario people think of when considering
          non-text content and Section 508. There are a variety of techniques
          that can be used to implement this scenario.
        </p>
        <p>
          The most important key to success is that the short text alternative
          should completely convey the purpose and information of the item being
          described. If that is not possible, than both short and long text
          solutions should be used together.
        </p>
      </section>
      <section id="long-text">
        <h2>Long Text</h2>
        <p>
          Short descriptions cannot serve the same purpose or present the same
          information as non-text content such as a chart or diagram
        </p>
      </section>
      <section id="controls">
        <h2>Controls and User Inputs</h2>
        <p> Non Text Content is a control or accepts user input.</p>
      </section>
      <section id="timebased">
        <h2>Time Based Media</h2>
        <p>
          Non Text Content is Time Media Based (media or moving content), test
          or exercise that would be invalid if presented in text or intended to
          provide a sensory experience.
        </p>
        <p>
          At the moment, IQIES does not incorporate any time based media in the
          application, so no techniques are being shown.
        </p>
      </section>
    </Fragment>
  );
};

export default NonTextHome;
