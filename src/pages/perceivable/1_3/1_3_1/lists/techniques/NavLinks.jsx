import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const NavLinks = () => {
  return (
    <Fragment>
      <p>
        Many sites, including WCAG recommend just putting links into a &lt;nav
        /&lt; region, but it doesn&apos;t help a non-sighted user to know how
        many list items there are, or how to navigate through them. Therefore
        it;s still important to wrap all lists in a &lt;nav /&gt; region with
        &lt;ul /&lt; and &lt;li /&lt; tags as well.
      </p>
      <h2>Nav Regions</h2>
      <h3>Nav Regions without unordered lists</h3>
      <nav>
        <a href="www.cnn.com">CNN</a>
        <a href="www.forbes.com">Forbes</a>
        <a href="www.washingtonpost.com">Washington Post</a>
      </nav>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="code for a nav element without an unordered list (Don't do this)"
      >
        {`
<nav>
  <a href="www.cnn.com">CNN</a>
  <a href="www.forbes.com">Forbes</a>
  <a href="www.washingtonpost.com">Washington Post</a>
</nav>
      `}
      </CodeDisplay>
      <h3>Nav Regions with unordered lists</h3>
      <nav>
        <ul>
          <li>
            <a href="www.cnn.com">CNN</a>
          </li>
          <li>
            <a href="www.forbes.com">Forbes</a>
          </li>
          <li>
            <a href="www.washingtonpost.com">Washington Post</a>
          </li>
        </ul>
      </nav>
      <CodeDisplay
        codeType="multi"
        exampleNumber={2}
        codeDescription="code for a nav element with an unordered list (Preferred)"
      >
        {`
<nav>
  <ul>
    <li>
    <a href="www.cnn.com">CNN</a>
    </li>
    <li>
      <a href="www.forbes.com">Forbes</a>
    </li>
    <li>
      <a href="www.washingtonpost.com">Washington Post</a>
    </li>
  </ul>
</nav>
      `}
      </CodeDisplay>
      <p>
        With no styling, the list within the nav element is still more readable
        and understandable for both sighted and non-sighted users.
      </p>
      <h2>Multiple Nav Elements</h2>
      <p>
        When there are multiple nav elements on a page, it is necessary to add
        an aria-label to each nav element in order that a non-sighted user
        understands what each nav grouping relates to.
      </p>
      <nav aria-label="national news">
        <ul>
          <li>
            <a href="www.cnn.com">CNN</a>
          </li>
          <li>
            <a href="www.forbes.com">Forbes</a>
          </li>
          <li>
            <a href="www.washingtonpost.com">Washington Post</a>
          </li>
        </ul>
      </nav>

      <nav aria-label="local news">
        <ul>
          <li>
            <a href="https://wtop.com/local/maryland/">WTOP</a>
          </li>
          <li>
            <a href="https://www.wusa9.com/maryland">WUSA-9 (CBS)</a>
          </li>
          <li>
            <a href="https://www.baltimoresun.com/">Baltimore Sun</a>
          </li>
        </ul>
      </nav>
      <CodeDisplay
        codeType="multi"
        exampleNumber={3}
        codeDescription="code for a multiple nav elements on a page"
      >
        {`
<nav>
  <ul>
    <li>
    <a href="www.cnn.com">CNN</a>
    </li>
    <li>
      <a href="www.forbes.com">Forbes</a>
    </li>
    <li>
      <a href="www.washingtonpost.com">Washington Post</a>
    </li>
  </ul>
</nav>
      `}
      </CodeDisplay>
    </Fragment>
  );
};
export default NavLinks;
