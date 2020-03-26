import React, { Fragment } from 'react';
import CodeDisplay from 'components/Code/CodeDisplay';

const firstColumn =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio ut. Id nibh tortor id aliquet lectus. Massa id neque aliquam vestibulum morbi blandit cursus. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant. Sed blandit libero volutpat sed cras ornare. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Cras sed felis eget velit aliquet sagittis. Amet nulla facilisi morbi tempus iaculis. Nisl rhoncus mattis rhoncus urna neque. Aliquet nibh praesent tristique magna sit. Viverra adipiscing at in tellus integer. Fermentum iaculis eu non diam phasellus vestibulum. Eros donec ac odio tempor orci dapibus. Mauris augue neque gravida in. Urna et pharetra pharetra massa massa ultricies mi.';

const secondColumn =
  'Et netus et malesuada fames. Nisi est sit amet facilisis magna etiam tempor orci eu. Ultricies mi quis hendrerit dolor magna eget est. Quam pellentesque nec nam aliquam. Tristique sollicitudin nibh sit amet commodo. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Dolor magna eget est lorem ipsum dolor sit. Odio pellentesque diam volutpat commodo sed egestas egestas. Nisi porta lorem mollis aliquam. Euismod quis viverra nibh cras. Erat imperdiet sed euismod nisi porta. Ultricies integer quis auctor elit sed vulputate mi. Ultricies integer quis auctor elit sed vulputate. Interdum posuere lorem ipsum dolor. Non curabitur gravida arcu ac. Sodales ut eu sem integer vitae justo. Arcu dictum varius duis at consectetur lorem donec. In arcu cursus euismod quis viverra. Non sodales neque sodales ut etiam sit amet nisl.';

const CSSPositioning = () => {
  return (
    <Fragment>
      <p>
        Although we need to maintain the reading order of the{' '}
        <abbr title="Document Object Model">DOM</abbr> to help those who rely
        both on the visual and <abbr title="Document Object Model">DOM</abbr>{' '}
        reading order, we can and should use CSS positioning to determine how
        something should show on the page.
      </p>
      <h2>Positioning Columns of Text</h2>
      <div className="columns">
        <div id="col1" className="col">
          {firstColumn}
        </div>
        <div id="col2" className="col">
          {secondColumn}
        </div>
      </div>
      <br />
      <p>
        In this scenario, we are using CSS to position two columns of
        information. Reading order is maintained, but a visual user will be able
        to scan through both columns of text.
      </p>
      <CodeDisplay
        codeType="multi"
        exampleNumber={1}
        codeDescription="SASS and HTML positioning two columns of text."
      >{`
      // styles
      .columns {
        float: left;
        width: 100%;
        .col {
          float: left;
          line-height: 1.5;
        }
        #col1 {
          margin-right: 3%;
          width: 44%;
        }
        #col2 {
          border-left: 1rem solid $color-primary-alt-light;
          padding-left: 2rem;
          width: 47%;
        }
      }
      //Code
      <div className="columns">
        <div id="col1" className="col">
          {firstColumn}
        </div>
        <div id="col2" className="col">
          {secondColumn}
        </div>
      </div>
      `}</CodeDisplay>
    </Fragment>
  );
};
export default CSSPositioning;
