import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';
import CodeDisplay from 'components/Code/CodeDisplay';

const HeadingOverview = () => {
  return (
    <Fragment>
      <h4>Headings</h4>
      <p>
        Most web pages are comprised of sections of content. Content sections
        should have headings that identify them, both as content and to identify
        how they relate to the other sections on the page. Headings allow for
        this and for{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        to programmatically identify those sections.
      </p>
      <Accordion>
        <AccordionItem title="Nesting Headings">
          <p>
            HTML allows for 6 levels of headings (h1 through h6) which should be
            used in a structural and hierarchical manner. With the advent of
            sections in HTML5, there now can be more than one H1 on a page, but
            it must always be the most important and over-riding object for that
            section. After that H2(s) should be nested and under those H3(s).
            Headings should always follow the numerical nesting. Never put an H4
            directly under an H2, If you want the font-sizing of a typical H4 in
            that place, style that particular H3 to that style. (Presentation
            via CSS is separate from structure.)
          </p>
          <main>
            <h1>Most important title</h1>
            <h2>Secondary Title</h2>
            <h3>Tertiary Title</h3>
            <h2>Another Secondary Title</h2>
          </main>
          <CodeDisplay
            codeType="multi"
            exampleNumber={1}
            codeDescription="proper nesting of headings"
          >
            {`
<main>
  <h1>Most important title</h1>
  <h2>Secondary Title</h2>
  <h3>Tertiary Title</h3>
  <h2>Another Secondary Title</h2>
</main>
            `}
          </CodeDisplay>
        </AccordionItem>
        <AccordionItem title="Using Roles on Legacy Sites">
          <p>
            When retrofitting a legacy site, it might not be possible to change
            headings that depend on the existing Document Object Model. In that
            case and only in that case, is it permissible to use the
            role=&quot;heading&quot; and aria-level combination. It is also
            permissible if you need an extra heading level (7) which is not
            possible within HTML.
          </p>
          <p>
            It would also be permissable to use the heading role when you want a
            heading to appear as normal text to a visual user, but still expose
            it as a heading to{' '}
            <abbr
              title="Accessible Technology"
              aria-label="Accessible Technology"
            >
              AT
            </abbr>
            .
          </p>
          <main>
            <h1>Most important title</h1>
            <div role="heading" aria-level="2">
              Secondary Title
            </div>
            <div role="heading" aria-level="3">
              Tertiary Title
            </div>
            <div role="heading" aria-level="2">
              Another Secondary Title
            </div>
          </main>
          <p>
            Notice that adding the role does not change the presentation.
            Additional CSS will need to be added to the items to present in a
            style that indicates the heading size and formatting. However,{' '}
            <abbr
              title="Accessible Technology"
              aria-label="Accessible Technology"
            >
              AT
            </abbr>{' '}
            will treat these as headings.
          </p>
          <CodeDisplay
            codeType="multi"
            exampleNumber={1}
            codeDescription="using heading roles and aria-levels"
          >
            {`
<main>
  <h1>Most important title</h1>
  <div role="heading" aria-level="2">
    Secondary Title
  </div>
  <div role="heading" aria-level="3">
    Tertiary Title
  </div>
  <div role="heading" aria-level="2">
    Another Secondary Title
  </div>
</main>
           `}
          </CodeDisplay>
        </AccordionItem>
      </Accordion>
    </Fragment>
  );
};
export default HeadingOverview;
