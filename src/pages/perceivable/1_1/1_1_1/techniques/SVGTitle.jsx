import React from 'react';

import CodeDisplay from 'components/Code/CodeDisplay';
import SvgComponent from 'components/images/SvgComponent';

const SVGTitle = () => {
  return (
    <section>
      <p>
        SVG requires a title tag underneath a hierarchical parent within the SVG
        tag. It is best to pass in the title rather than hard coding it so that
        icons can more accurately describe the function rather than the icon
        itself.
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
        <CodeDisplay
          id="svg-code"
          codeType="multi"
          codeDescription="SVG Code Example with Title"
        >
          {`
  <svg
    version="1.1"
    width="75"
    height="55">
      <title>Red Rectangle</title>
      <rect width="75"
            height="50"
            rx="20"
            ry="20"
            fill="#fc3d03"
            stroke="#872203"
            stroke-fill="1">
      </rect>
</svg>
`}
        </CodeDisplay>
      </div>
    </section>
  );
};
export default SVGTitle;
