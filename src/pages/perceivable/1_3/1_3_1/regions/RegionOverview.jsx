import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';
import CodeDisplay from 'components/Code/CodeDisplay';

const RegionOverview = () => {
  return (
    <Fragment>
      <h4>Semantic Areas and Aria Landmarks</h4>
      <p>
        Starting with HTML5 came the notion of regions, commonly known as
        landmarks. While some sections have been used within web pages for
        decades, others are newer and not as well understood. Forms and Table
        markup are considered semantic elements, but newer ones don&apos;t tend
        to do much visually other than just add more code. So why use them?
      </p>
      <p>
        These tags introduce more meaning to the pages and makes it easier for
        users of{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        to navigate and know where they are in the page. aria landmarks also
        help with this, and should be used within code that doesn&apos;t easily
        lend itself to existing html structures. Screen readers provide keyboard
        navigation to these areas (Jaws uses the R key).
      </p>
      <p>
        Note that these techniques do not add anything for keyboard only users.
        These approaches only add extra capabilities for non-sighted users to
        easily navigate a page. Skip Links are still necessary for sighted
        keyboard users. (covered in 2.4.1 ByPass Blocks{' '}
        <span className="hidden">Link to come.)</span> )
      </p>
      <h5>Commonly Used Semantic Elements</h5>
      <p>
        Elements that define specific areas on the page are commonly used now.
        While they can be styled, their main use is for screen readers and other
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        to be able to identify their use to users who cannot see the screen. A
        screen reader, for example would read each item as a region and be able
        to tell the user which region they are in: Navigation (&lt;nav /&gt;),
        (&lt;header /&gt;), (&lt;footer /&gt;), (&lt;main /&gt;) are the most
        common examples of this.
      </p>
      <p>
        When using a semantic element, proper behavior is <strong>NOT</strong>{' '}
        to set aria-role attributes. They aren&apos;t necessary and can cause
        excessive &quot;noise&quot; for an{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        user.
      </p>

      <h5>Aria Landmarks</h5>

      <p>
        Aria Landmarks may be used when other semantic markup is not available
        or is not indicated. Landmarks have some cross-over with HTML Semantic
        elements, but should only be used when it is not reasonable to use the
        semantic element. Previously, because of poor HTML5 support, aria
        landmarks were used in conjunction to provide proper labeling for AT.
        This is no longer necessary and so should no longer be the standard.
      </p>
      <p>
        Landmarks are used as values of the role attribute. Common use would be:
      </p>
      <CodeDisplay
        codeType="multi"
        codeDescription="Code sample for role attribute"
        exampleNumber={1}
      >{`
<div role="search">
  <input name="search" type="search" />
  <button type="button" onClick={handleClick}>Search</button>
</div>`}</CodeDisplay>
      <p>
        Instead of <strong>banner</strong>: use &lt;header /&gt;.
      </p>
      <p>
        Can use <strong>complementary</strong> or &lt; aside /&gt; depending on
        specific use. They have similar, but slightly different meanings.
        Basically they are tangentially related to the main content, but can
        stand alone as well.
      </p>
      <p>
        <strong>contentInfo</strong> may be used within the &lt;footer /&gt;
        tag.{' '}
      </p>
      <p>
        Instead of <strong>main</strong>, use &lt;main /&gt;. There should only
        be one main region on a page.
      </p>
      <p>
        Instead of <strong>navigation</strong>, use &lt;nav /&gt;. There may be
        numerous navigation regions on a page.
      </p>
      <p>
        <strong>search</strong> should be used to denote a search area. There is
        no corresponding HTML5 tag.
      </p>
      <p>
        <strong>application</strong> should be used to denote an application.
        Applications are not forms, instead they are items that should be
        treated like a desktop application and not a web page. If you create a
        page that consists of over 90% non-standard html widgets then that area
        should be marked as &quot;application&quot;.
      </p>

      <h5>Region Role</h5>
      <p>
        It is possible to assign a generic &quot;region&quot; role to a section
        of a page. Items using the &quot;region&quot; should also note the
        techniques for naming regions. When using the &quot;region&quot; role,
        be sure to use it on the non-semantic &lt;div /&gt; tag.
      </p>
      <h5>Naming Regions</h5>
      <p>
        Most regions should be named in a way that allows{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        to announce the fact that a user is not only at a specific region, but
        describes the region as well.
      </p>
      <Accordion>
        <AccordionItem title="Naming Regions with aria-label">
          <p>
            Aria-label is an attribute on an html element that substitutes the
            string value to be read. It works well on interactive content
            elements such as links, and form controls. You can use aria-label on
            regions provided they pass the following criteria:
          </p>
          <ul>
            <li>&lt;main /&gt; and &lt;nav /&gt; elements</li>
            <li>
              &lt;div /&gt; elements with the role of navigation, search, main,
              img
            </li>
            <li>
              &lt;div /&gt; and &lt;span /&gt; elements that contain interactive
              roles such as link or button
            </li>
            <li>&lt;td /&gt; or &lt;th /&gt;</li>
          </ul>

          <CodeDisplay
            codeType="multi"
            codeDescription="Samples of aria-label on regions"
            exampleNumber={1}
          >
            <Fragment>
              <h2>Test Example</h2>
              <main aria-label="Perceivable">
                <div role="search" aria-label="Global Search ">
                  <label htmlFor="search" className="hidden">
                    Search for Items
                  </label>
                  <input id="search" name="search" type="search" />
                  <button type="button" aria-label="Submit Search">
                    Search
                  </button>
                </div>
              </main>
            </Fragment>
            {`
<main aria-label="Perceivable"> //Main Region is read, we just add the 'Perceivable' here
  <div role="search" aria-label="Global Search ">
    <label htmlfor="search" className="hidden">Search for Items</label>
    <input id="search" name="search" type="search" />
    <button type="button" onClick={handleClick} aria-label="Submit Search">Search</button>
  </div>
</main>
          `}
          </CodeDisplay>
        </AccordionItem>
        <AccordionItem title="Naming Regions with aria-labelledby">
          <p>
            {' '}
            Unlike aria-label, the aria-labelledby attribute passes in the id of
            another element to be read. This type of region naming is most
            adventageous when the first child in the section is a heading. Like
            aria-label, aria-labelledby should give an element an accessible
            name.
          </p>
          <CodeDisplay
            codeType="multi"
            codeDescription="Sample of aria-labelledby with section and heading."
            exampleNumber={1}
          >
            <div role="region" aria-labelledby="heading-name">
              <h3 id="heading-name">Heading Name</h3>
            </div>
            {`
 <div role="region" aria-labelledby="heading-name">
  <h3 id="heading-name">Heading Name</h3>
</div>
              `}
          </CodeDisplay>
        </AccordionItem>
        <AccordionItem title="Naming Regions with aria-describedby">
          <p>
            aria-describedby is similar to aria-labelledby in terms of use
            (attaching an id), the difference is that aria-describedby tends to
            describe whatever it is attached to rather than just naming it.
          </p>
          <CodeDisplay
            codeType="multi"
            codeDescription="Sample of aria-labelledby with section and heading."
            exampleNumber={1}
          >
            <div role="region" aria-describedby="heading-description">
              <h3 id="heading-name">Heading Name</h3>
              <p id="heading-description">
                This paragraph gives a description.
              </p>
            </div>
            {`
 <div role="region" aria-labelledby="heading-description">
  <h3>Heading Name</h3>
  <p id="heading-description">This paragraph gives a description.</p>
</div>
              `}
          </CodeDisplay>
        </AccordionItem>
      </Accordion>
    </Fragment>
  );
};
export default RegionOverview;
