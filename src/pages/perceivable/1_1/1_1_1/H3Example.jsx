import React, { Fragment } from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';

const H3Example = () => {
  return (
    <Fragment>
      <h1>Descriptions for Controls and Inputs</h1>
      <p>
        For the most part labeling and groupings via fieldset / legend are
        sufficient to label form fields. But at some point, someone is going to
        want to use an image as a button.
      </p>
      <p>
        It is permissible to use the alt attributes on an input only when the
        type is an image.
      </p>
      <div>
        <input
          type="image"
          name="submit"
          src={`${process.env.PUBLIC_URL}/assets/images/boom.jpg`}
          alt="Submit The Form"
        />
      </div>
      <CodeDisplay codeDescription="Code for an submit input with a type of image.">
        &lt;input type=&quot;image&quot; name=&quot;submit&quot;
        src=&quot;/assets/images/boom.jpg`&quot; alt=&quot;Submit The Form&quot;
        /&gt;
      </CodeDisplay>
    </Fragment>
  );
};

export default H3Example;
