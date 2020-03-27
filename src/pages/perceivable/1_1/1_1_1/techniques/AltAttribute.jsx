import React from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const AltAttribute = () => {
  return (
    <section>
      <p>
        For most images, alt text is the way to go. If the image you are using
        is an image of something, such as a newspaper photo or image of a piece
        of art, the text in the alt attribute must describe the image&lsquo;s
        appearance.{' '}
      </p>
      <p>
        <img
          width="25%"
          src={`${process.env.PUBLIC_URL}/assets/images/AdultChildHands.jpg`}
          alt="An adult hand lightly clasping a baby's fist."
        />
      </p>
      <p>Good: An Adult hand lightly clasping a baby&lsquo;s fist.</p>
      <p>Bad: Black and White Image - Hands</p>
      <CodeDisplay
        id="alt-text"
        codeType="multi"
        codeDescription="Code for image alt text"
      >
        {`
<img
  width="25%"
  src="assets/images/AdultChildHands.jpg"
  alt="An adult hand lightly clasping a baby's fist."
/>
`}
      </CodeDisplay>
    </section>
  );
};
export default AltAttribute;
