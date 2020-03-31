import React, { Fragment } from 'react';
import { ExternalLink } from 'components/Links';

const DomOrder = () => {
  return (
    <Fragment>
      <p>
        For the most part, we want to make sure that the visual order within a
        page matches the <abbr title="Document Object Model">DOM</abbr> Order
        that is present when{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        is utilized. This tends to cause the most problems for someone with
        either dyslexia or low vision issues works to read a page both visually
        and with a screen or page reader. To have the reader seem to skip
        through the page in a different manner than what is seen visually can
        cause issues.
      </p>
      <p>
        This is mainly a testing situation, which can be determined through
        either the{' '}
        <ExternalLink to="https://wave.webaim.org/extension/">
          WAVE
        </ExternalLink>{' '}
        or{' '}
        <ExternalLink to="https://www.ssa.gov/accessibility/andi/help/install.html">
          ANDI
        </ExternalLink>{' '}
        Plugins.
      </p>
      <dl className="list">
        <dt>WAVE</dt>
        <dd>
          Using WAVE on a Page, choose the Structure tab and make sure the
          basics of the underlying{' '}
          <abbr title="Document Object Model">DOM</abbr> structure is the same
          as the visual structure.
        </dd>
        <dt>ANDI</dt>
        <dd>
          Choose Structures and then Reading Order and determine if the reading
          order is the same as the visual order.
          <br />
          <img
            className="large"
            src={`${process.env.PUBLIC_URL}/assets/images/ANDIDomOrder.png`}
            alt="Screenshot of Chrome ANDI Reading Order"
          />
        </dd>
      </dl>
    </Fragment>
  );
};
export default DomOrder;
