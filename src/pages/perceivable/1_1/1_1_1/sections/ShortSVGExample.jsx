import React from 'react';

import { TAB } from 'libraries/constants/constants';

import CodeDisplay from 'components/Code/CodeDisplay';
import SvgComponent from 'components/images/SvgComponent';

const SVGExample = () => {
  return (
    <section>
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
        <CodeDisplay codeDescription="SVG Code Example with Title">
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
        </CodeDisplay>
      </div>
    </section>
  );
};
export default SVGExample;
