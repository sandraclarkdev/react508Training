import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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
        <button type="button" classNames="btn-link">
          <FontAwesomeIcon icon={faCoffee} /> Get your Coffee Here
        </button>
      </div>
      <div aria-label="Code for showing an empty alt attribute when an icon is represented by existing text. Skipped for A T">
        <div aria-hidden="true">
          <code>
            &lt;img src=&quot;assets/images/coffeeicon.jpg&quot;
            alt=&quot;&quot;/&gt;
          </code>
          <p>Or </p>
          <code>
            &lt;img src=&quot;assets/images/coffeeicon.jpg&quot;
            aria-hidden=&quot;true&quot;/&gt;
          </code>
        </div>
      </div>
    </section>
  );
};
export default CombinedImageDescription;
