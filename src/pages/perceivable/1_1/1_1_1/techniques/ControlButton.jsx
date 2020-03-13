import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const ControlButton = () => {
  return (
    <Fragment>
      <p>
        If the button is not an input, we should use the aria-label on the
        button to give the text. Don’t place alt text within the image, but do
        place an empty alt attribute on the image to avoid generating false
        errors through automated testing tools. At this point we want to
        describe the button not the image.
      </p>

      <div>
        <button className="btn" type="button" aria-label="Blow up the page">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/boom2.png`}
            alt=""
          />
        </button>
      </div>
      <CodeDisplay
        id="control-button"
        codeType="multi"
        codeDescription="Code for an submit input with a type of image."
      >
        {`
  <button type="button" aria-label="Blow up the page">
  <img
    src="assets/images/boom2.jpg"
    alt=""
  />
</button>
`}
      </CodeDisplay>
    </Fragment>
  );
};

export default ControlButton;
