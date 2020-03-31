import React, { Fragment } from 'react';

const SensoryOverview = () => {
  return (
    <Fragment>
      <p>
        Making sure that all users can access instructions for using content is
        required. This means that we cannot rely on a user being able to
        reference shape or size or location to find something on a page. (For
        instance &quot;button on the right&quot;, &quot;square button&quot;). We
        can use those references, but we need to give additional information to
        clarify anything that is dependent on this type of instructions.
      </p>
      <p>
        We can and should provide this information to support those who have
        cognitive limitations, we just need to also add in information in other
        ways for those who rely on assistive technology which can&apos;t
        recognize the shapes or location.
      </p>
      <p>
        Good instructions will use more than one clue to instruct a user as to
        what to do.
      </p>
      <h4>Example 1</h4>
      <div className="sensory">
        Please search by using the orange box labelled &apos;Search&apos; on the
        right
      </div>
      <form className="search-box">
        <input type="search" id="search" name="search" placeholder="Search" />
        <button type="button" className="btn btn-primary btn-search">
          Submit
        </button>
      </form>
      <p className="clear">
        Notice that we can use a color here, but clearly indicating that the box
        is labelled &apos;Search&apos; allows a non-sighted user the ability to
        know where it is as well.
      </p>
      <h4>Example 2</h4>
      <div>To exit the form without saving, click the Cancel button</div>
      <p>
        Note that we refer to the value of the button, not where it is, or the
        color.
      </p>
    </Fragment>
  );
};

export default SensoryOverview;
