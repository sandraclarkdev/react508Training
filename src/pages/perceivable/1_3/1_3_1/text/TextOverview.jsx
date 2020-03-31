import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CodeDisplay from 'components/Code/CodeDisplay';

const TextOverview = () => {
  return (
    <Fragment>
      <h4>Text Indicators</h4>
      <p>
        In some cases, there are no semantic elements which can convey
        information, in this case text needs to be employed as well as some
        structural elements (such as &lt;strong /&gt;) to indicate to a user
        that the information exists. This is commonly done when adding new
        content to a page that needs to be called out.
      </p>
      <h5>Instant Pot Recipes</h5>
      <ul>
        <li>
          <Link to=" ">
            Butter Chicken <strong>(new)</strong>
          </Link>
        </li>
        <li>
          <Link to=" ">Navy Bean Soup</Link>
        </li>
      </ul>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDisplay="Example of using text to indicate new content"
      >{`
<h5>Instant Pot Recipes</h5>
<ul>
  <li>
    <Link to=" ">
      Butter Chicken <strong>(new)</strong>
    </Link>
  </li>
  <li>
    <Link to=" ">Navy Bean Soup</Link>
  </li>
</ul>
      `}</CodeDisplay>
      <h4>Font variations and explicit statements</h4>
      <p>
        In some cases, such as indicating insertions and deletions over time
        within a document, we need to incorporate both visual and aural
        indicators.{' '}
      </p>
      <h5>Document Example</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ultrices neque
        ornare aenean euismod. Nulla porttitor massa id neque aliquam vestibulum
        morbi. Nisi porta lorem mollis aliquam ut porttitor. Fringilla est
        ullamcorper eget nulla facilisi etiam dignissim diam quis. Urna cursus
        eget nunc scelerisque.{' '}
        <span className="insertion">
          <span className="sr-only">(text inserted begin)</span>
          Nunc scelerisque viverra mauris in. Vel facilisis volutpat est velit
          egestas dui id ornare.{' '}
          <span className="sr-only">(text inserted end)</span>
        </span>
        Laoreet suspendisse interdum consectetur libero id faucibus nisl
        tincidunt. Eget nunc lobortis mattis aliquam faucibus purus in massa
        tempor. Sit amet nisl purus in mollis nunc sed. Proin nibh nisl
        condimentum id venenatis a condimentum. Auctor neque vitae tempus quam
        pellentesque nec nam. Eu augue ut lectus arcu bibendum at varius vel
        pharetra. Consectetur lorem donec massa sapien faucibus et molestie ac.
        A arcu cursus vitae congue mauris rhoncus aenean. Adipiscing enim eu
        turpis egestas pretium aenean pharetra.{' '}
        <span className="insertion">
          <span className="sr-only">(text inserted begin)</span>
          Sed sed risus pretium quam{' '}
          <span className="sr-only">(text inserted end)</span>
        </span>{' '}
        <span className="deletion">
          <span className="sr-only">(text deleted begin)</span> arialvulputate
          dignissim suspendisse.
          <span className="sr-only">(text deleted end)</span>
        </span>{' '}
        Nam aliquam sem et tortor consequat id.
      </p>

      <p>
        In the previous example, we use a combination of CSS styling (underlines
        for insertions and strike-throughs for deletions. As well, we use the
        off-left technique to sandwich the inserted or deleted text with aural
        information that is only available to{' '}
        <abbr title="Accessible Technology" aria-label="Accessible Technology">
          AT
        </abbr>{' '}
        with wording to indicate a text inserted or deleted begin and end. We
        can&apos;t use an aria-label here since the aria-label will over-ride
        all text within the span.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={2}
        codeDisplay="Example of using text to indicate insertions and deletions."
      >{`
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ultrices neque
  ornare aenean euismod. Nulla porttitor massa id neque aliquam vestibulum
  morbi. Nisi porta lorem mollis aliquam ut porttitor. Fringilla est
  ullamcorper eget nulla facilisi etiam dignissim diam quis. Urna cursus
  eget nunc scelerisque.{' '}
  <span className="insertion">
    <span className="sr-only">(text inserted begin)</span>
    Nunc scelerisque viverra mauris in. Vel facilisis volutpat est velit
    egestas dui id ornare.{' '}
    <span className="sr-only">(text inserted end)</span>
  </span>
  Laoreet suspendisse interdum consectetur libero id faucibus nisl
  tincidunt. Eget nunc lobortis mattis aliquam faucibus purus in massa
  tempor. Sit amet nisl purus in mollis nunc sed. Proin nibh nisl
  condimentum id venenatis a condimentum. Auctor neque vitae tempus quam
  pellentesque nec nam. Eu augue ut lectus arcu bibendum at varius vel
  pharetra. Consectetur lorem donec massa sapien faucibus et molestie ac.
  A arcu cursus vitae congue mauris rhoncus aenean. Adipiscing enim eu
  turpis egestas pretium aenean pharetra.{' '}
  <span className="insertion">
    <span className="sr-only">(text inserted begin)</span>
    Sed sed risus pretium quam{' '}
    <span className="sr-only">(text inserted end)</span>
  </span>{' '}
  <span className="deletion">
    <span className="sr-only">(text deleted begin)</span> arialvulputate
    dignissim suspendisse.
    <span className="sr-only">(text deleted end)</span>
  </span>{' '}
  Nam aliquam sem et tortor consequat id.
</p>
      `}</CodeDisplay>
    </Fragment>
  );
};
export default TextOverview;
