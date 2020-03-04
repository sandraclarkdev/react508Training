import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import SvgComponent from 'components/images/SvgComponent';
import { TAB } from 'libraries/constants/constants';

const H1Example = () => {
  return (
    <Fragment>
      <h1>Short Descriptions for Images</h1>
      <h2>SVG</h2>
      <p>
        SVG requires a title tag underneath a parent. It is best to pass in the
        title rather than hard coding it so that icons can more accurately
        describe the function rather than the icon itself.
      </p>
      <p>
        Inline SVG is more accessible than any other technique such as
        &lt;embed&gt; or &lt;object&gt;. It directly exposes the information to
        AT.
      </p>

      <h3>Example of SVG</h3>
      <div>
        <SvgComponent width="75" height="55" title="Red Rectangle">
          <rect
            width="75"
            height="50"
            rx="20"
            ry="20"
            fill="#fc3d03"
            stroke="#872203"
            stroke-fill="1"
          />
        </SvgComponent>
      </div>
      <div className="col-md-6">
        <code>
          &lt;svg version=&quot;1.1&quot; width=&quot;300&quot;
          height=&quot;200&quot;&gt;
          <br />
          {TAB}&lt;title&gt;Red Rectangle&lt;/title&gt;
          <br />
          {TAB}&lt;rect <br />
          {TAB}
          {TAB}width=&quot;75&quot; <br />
          {TAB}
          {TAB}height=&quot;50&quot; <br />
          {TAB}
          {TAB}rx=&quot;20&quot; <br />
          {TAB}
          {TAB}ry=&quot;20&quot; <br />
          {TAB}
          {TAB}fill=&quot;#fc3d03&quot;
          <br />
          {TAB}
          {TAB}stroke=&quot;#872203&quot;
          <br />
          {TAB}
          {TAB}stroke-fill=&quot;1&quot; /&gt;
          <br />
          &lt;/svg&gt;
        </code>
      </div>

      <h3> Image Alt Text</h3>
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
      <p>Bad: Black and White Image - Kids</p>
      <div>
        <code>
          &lt;img width=&quot;25%&quot; src=&quot;
          assets/images/AdultChildHands.jpg&quot; alt=&quot;An adult hand
          lightly clasping a baby&lsquo;s fist.&quot;/&gt;
        </code>
      </div>
      <h3>Image and descriptive code next to each other</h3>
      <p>
        In some cases, the icon and text are already next to each other and we
        don&lsquo;t need to add additional alt text because that would be
        redundant. In this case an empty alt attribute is appropriate or
        aria-hidden=&quot;true&quot; would also work to hide the image from a
        screen reader.
      </p>

      <div>
        <a href="#">
          <FontAwesomeIcon icon={faCoffee} /> Get your Coffee Here
        </a>
      </div>
      <div>
        <code>
          &lt;img src=&quot;assets/images/coffeeicon.jpg&quot; alt=&quot;&quot;/&gt;
        </code>
        <p>Or </p>
        <code>
          &lt;img src=&quot;assets/images/coffeeicon.jpg&quot;
          aria-hidden=&quot;true&quot;/&gt;
        </code>
      </div>
    </Fragment>
  );
};

export default H1Example;
