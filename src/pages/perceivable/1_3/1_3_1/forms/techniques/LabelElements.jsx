import React, { Fragment } from 'react';

const LabelElements = () => {
  return (
    <Fragment>
      <p> The following are elements that require labels</p>
      <ul className="list">
        <li>
          &lt;input type=&quot;<strong>text</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>checkbox</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>radio</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>file</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>password</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>color</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>date</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>date-time</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>email</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>month</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>number</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>range</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>tel</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>time</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>url</strong>&quot; /&gt;
        </li>
        <li>
          &lt;input type=&quot;<strong>week</strong>&quot; /&gt;
        </li>
        <li>
          &lt;<strong>textarea</strong> /&gt;
        </li>
        <li>
          &lt;<strong>select</strong> /&gt;
        </li>
      </ul>
      <p>
        When using these controls, don&apos;t use the label element since the
        labels are provided via other attributes.
      </p>
      <ul className="list">
        <li>
          &lt;input type=&quot;<strong>submit</strong>&quot; /&gt; and &lt;input
          type=&quot;<strong>reset</strong>&quot; /&gt; <br /> (label is
          provided with the &quot;value&quot; attribute.)
        </li>
        <li>
          &lt;input type=&quot;<strong>image</strong>&quot; (use the
          &quot;alt&quot; attribute)
        </li>
        <li>
          {' '}
          &lt;input type=&quot;<strong>hidden</strong>&quot; (since it is hidden
          no label is required.)
        </li>
        <li>&lt;button /&gt; (label is the children within the button)</li>
      </ul>
    </Fragment>
  );
};
export default LabelElements;
