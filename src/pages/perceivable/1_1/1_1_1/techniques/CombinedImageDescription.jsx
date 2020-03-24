import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import CodeDisplay from 'components/Code/CodeDisplay';

const CombinedImageDescription = () => {
  return (
    <section>
      <h3>Image and descriptive code next to each other</h3>
      <p>
        In some cases, the icon and text are already next to each other and we
        don&lsquo;t need to add additional alt text because that would be
        redundant. In this case an empty alt attribute is appropriate or
        aria-hidden=&quot;true&quot; would also work to hide the image from a
        screen reader.
      </p>

      <div>
        <button type="button" className="btn-link">
          <FontAwesomeIcon icon={faCoffee} /> Get your Coffee Here
        </button>
      </div>
      <CodeDisplay
        id="image-desc"
        codeType="multi"
        codeDescription="Code for combined image and description"
      >
        {`
<button type="button" classnames="btn-link">
  <img src="assets/images/coffeeicon.jpg" alt="" /> Get your Coffee Here
</button>
Or
<button type="button" classnames="btn-link">
  <img src="assets/images/coffeeicon.jpg" aria-hidden="true" />
  Get your Coffee Here
</button>
`}
      </CodeDisplay>
    </section>
  );
};
export default CombinedImageDescription;
