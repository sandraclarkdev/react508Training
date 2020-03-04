import React, { Fragment } from 'react';

import {
  AltAttributeExample,
  AsciiArtExample,
  CombinedImageDescExample,
  SVGExample,
} from 'pages/perceivable/1_1/1_1_1/sections/';

const H1Example = () => {
  return (
    <Fragment>
      <h1>Short Descriptions for Images</h1>
      <p>
        There are a variety of scenarios that require short descriptions
        implemented in different ways. Below are examples
      </p>
      <SVGExample />
      <AltAttributeExample />
      <CombinedImageDescExample />
      <AsciiArtExample />
    </Fragment>
  );
};

export default H1Example;
