import React, { Fragment } from 'react';

import { ExternalLink } from 'components/Links';

const Linearize = () => {
  return (
    <Fragment>
      <p>
        A good way to check this is to linearize a page and see if the page is
        still understandable. By linearizing, we can then visually determine if
        the areas on our pages make sense in the DOM order it is in.
      </p>
      <p>
        This is especially true for{' '}
        <abbr title="Single Page Applications">SPAs</abbr> which have a large
        number of components being called and displayed.
      </p>
      <p>
        Once a page is linearized, scroll through it and determine if the page
        content makes sense in the order in which it is presented. Ask yourself
        the following questions:
      </p>
      <ul className="list">
        <li>Are all the groupings making sense?</li>
        <li>Is navigation separate from content?</li>
        <li>
          Is information that is in columns reading correctly as the page moves
          between the columns?
        </li>
      </ul>
      <p>
        Reading order is not to be confused with navigation order. We
        aren&apos;t talking about moving between elements with a keyboard at
        this time. We are simply talking about whether the contents of the page
        makes sense without CSS.
      </p>
      <h2>Linearize Instructions per Browser</h2>
      <p>
        For most browsers, working with an accessibility extension (toolbar)
        works the best. Not all browsers we support have a way to linearize.
        Those that do are listed.
      </p>
      <dl className="list">
        <dt>Chrome</dt>
        <dd>
          Download and install{' '}
          <ExternalLink to="https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm?hl=en-US">
            Web Developer Toolbar for Chrome
          </ExternalLink>{' '}
          and under the Miscellaneous Tab choose, &quot;Linearize Page&quot;.{' '}
          <br />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ChromeWebDeveloper.png`}
            alt="Screenshot of Chrome Web Developer Toolbar with the Miscellaneous tab open"
          />
        </dd>
        <dt>FireFox</dt>
        <dd>
          Download and install{' '}
          <ExternalLink to="https://addons.mozilla.org/en-US/firefox/addon/web-developer/">
            Web Developer Toolbar for Firefox
          </ExternalLink>{' '}
          and under the Miscellaneous Tab choose, &quot;Linearize Page&quot;.
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/FirefoxWebDeveloper.png`}
            alt="Screenshot of Firefox Web Developer Toolbar with the Miscellaneous tab open"
          />
        </dd>
        <dt>Internet Explorer</dt>
        <dd>
          Download and install{' '}
          <ExternalLink to="https://developer.paciellogroup.com/resources/wat/">
            Web Accessibility Toolbar
          </ExternalLink>{' '}
          and under the Tables tab, choose, &quot;Linearize&quot;.
          <br />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ieWAT.png`}
            alt="Screenshot of Internet Explorer Web Accessibility Toolbar with the Tables tab open"
          />
        </dd>
        <dt>Edge and Safari</dt>
        <dd>
          At the moment there is no way to linearize a page in these two
          browsers. Please check your page in Chrome, Firefox or IE using the
          plugins noted.
        </dd>
      </dl>
    </Fragment>
  );
};
export default Linearize;
