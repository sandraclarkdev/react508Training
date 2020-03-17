import React, { Fragment } from 'react';
import { Accordion, AccordionItem } from 'carbon-components-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchMinus, faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import CodeDisplay from 'components/Code/CodeDisplay';

const ControlOverview = () => {
  const handleCloseClick = e => {
    e.preventDefault();
    return false;
  };

  return (
    <Fragment>
      <h4>Controls and Icons</h4>
      <p>
        Controls in this situation are interactive html elements and widgets. We
        need to identify them for in a way that allows
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        to understand what they are. This also includes font icons which need to
        be set up in a way that doesn&apos;t depend on font-family which could
        be overridden by a user. Certain disabled users will regularly override
        fonts on a page, so we need to make sure that font icons can&apos;t be
        overridden
      </p>
      <Accordion>
        <AccordionItem title="Proper Way to work with Font Icons">
          <p>
            In order to show a font icon in a way that the user isn&apos;t able
            to override, we need to work with both markup and CSS.
          </p>

          <p>
            The most important item is to place a role=&quot;img&quot; as part
            of the span and to hide the icon from a screen reader.
          </p>
          <p>
            Using a package like Font-Awesome or other font library is the
            easiest way. By hiding the image from{' '}
            <abbr
              title="Accessible Technology"
              aria-label="Accessible Technology"
            >
              AT
            </abbr>{' '}
            we do not have to identify the image via an alt attribute. Instead
            the aria-label identifies the control.
          </p>
          <CodeDisplay
            codeType="multi"
            codeDescription="Incorporating Font Icons on Controls"
            exampleNumber={1}
          >
            <button type="button" aria-label="zoom-out">
              <FontAwesomeIcon
                icon={faSearchMinus}
                role="img"
                aria-hidden="true"
              />
            </button>
            {`
<button type="button" aria-label="zoom-out">
  <FontAwesomeIcon
    icon={faSearchMinus}
    role="img"
    aria-hidden="true"
  />
</button>
          `}
          </CodeDisplay>
          <CodeDisplay
            codeType="multi"
            codeDescription="Hiding Font image via aria"
            exampleNumber={2}
          >
            <button type="button" aria-label="zoom-in">
              <FontAwesomeIcon
                icon={faSearchPlus}
                role="img"
                aria-hidden="true"
              />
            </button>
            {`
<button type="button" aria-label="zoom-in">
  <FontAwesomeIcon
    icon={faSearchPlus}
    role="img"
    aria-hidden="true"
  />
</button>
            `}
          </CodeDisplay>
        </AccordionItem>
        <AccordionItem title="Naming User Interfaces">
          <p>
            Controls always need to be labeled in one form or another. When a
            control cannot support a &lt;label /&gt; for whatever reason, than
            naming can be done via the aria-label or aria-labelledby attributes.
            Keep in mind that it is possible that WAVE or other accessibility
            related tools might flag a missing label.
          </p>
          <CodeDisplay
            codeType="multi"
            codeDecription="Examples of naming controls"
            exampleNumber={1}
          >
            Labeling a ToolTip
            {`
  <p className="hidden" id="tooltip-descriptor">
  ToolTip for Naming Cats
</p>
<div
  id="cat-tooltip"
  role="tooltip"
  aria-labelledby="tooltip-descriptor"
/>
            `}
          </CodeDisplay>
        </AccordionItem>
        <AccordionItem title="Descriptive Labels for Controls">
          <p>
            Sometimes a control will need more information than just a name. We
            might want to associate instructions or add more descriptive
            information that needs to be read by{' '}
            <abbr
              title="Accessible Technology"
              aria-label="Accessible Technology"
            >
              AT
            </abbr>{' '}
            in conjunction with a control. We then use the aria-describedby
            attribute to associate descriptions with the control.
          </p>
          <p>
            Given how screen readers read information, it does a user no good to
            have those items below the control, when a screen reader is in forms
            mode, a user tabs to each individual control anything below the
            control is normally not read by{' '}
            <abbr
              title="Accessible Technology"
              aria-label="Accessible Technology"
            >
              AT
            </abbr>{' '}
            . This means that vital information can be lost.
          </p>
          <CodeDisplay
            codeType="multi"
            codeDescription="Adding information to a close button"
            exampleNumber={1}
          >
            <button
              aria-label="Close"
              aria-describedBy="close-description"
              type="button"
              onClick={handleCloseClick}
            >
              X
            </button>
            <div id="close-description">
              Choosing Close will discard any information entered and return you
              to the original page.
            </div>
            {`
 <button
  aria-label="Close"
  aria-describedBy="close-description"
  type="button"
  onClick={handleCloseClick}
>X</button>
<div id="close-description">
 Choosing Close will discard any information entered and
 return you to the original page.
</div>
            `}
          </CodeDisplay>
          <p>
            Many inputs need more instruction than the label and again, these
            are commonly displayed below (after) the input itself. It's
            important to add that information into the control itself to make
            sure it is available for{' '}
            <abbr
              title="Accessible Technology"
              aria-label="Accessible Technology"
            >
              AT
            </abbr>{' '}
            .
          </p>
          <CodeDisplay
            codeType="multi"
            codeDescription="Adding instructions to an input control"
            exampleNumber={2}
          >
            <label htmlFor="currentDate">Current Date </label>
            <input
              type="date"
              id="currentDate"
              aria-describedby="currentDate-instructions"
            />
            <div
              id="currentDate-instructions"
              aria-label="Enter the date in the format M M /D D / Y Y Y Y "
            >
              Enter the date in the format MM/DD/YYYY
            </div>
            {`
  <label htmlFor="currentDate">Current Date </label>
  <input
    type="date"
    id="currentDate"
    aria-describedby="currentDate-instructions"
  />
  <div
    id="currentDate-instructions"
    aria-label="Enter the date in the format M M /D D / Y Y Y Y "
  >
    Enter the date in the format MM/DD/YYYY
  </div>
            `}
          </CodeDisplay>
          <p>
            Note the aria-label in the described feature that helps{' '}
            <abbr
              title="Accessible Technology"
              aria-label="Accessible Technology"
            >
              AT
            </abbr>{' '}
            read the help text correctly. As another note using the HTML5 input
            types such as dates also helps immensely with accessibility.
          </p>
        </AccordionItem>
      </Accordion>
    </Fragment>
  );
};
export default ControlOverview;
