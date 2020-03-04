import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import URIS from 'libraries/constants/uri-constants';

import PerceivableHome from 'pages/perceivable/PerceivableHome';
import PerceivableTextAlt from 'pages/perceivable/1_1/PerceivableTextAlt';
import H1Example from 'pages/perceivable/1_1/1_1_1/H1Example';

const PerceivableRoutes = () => {
  return (
    <Fragment>
      <Route exact path={URIS.URI_PERCEIVABLE_TEXTALT_SHORT}>
        <H1Example />
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE_TEXTALT}>
        <PerceivableTextAlt />
      </Route>
      <Route exact path={URIS.URI_PERCEIVABLE}>
        <PerceivableHome />
      </Route>

      <Route path={URIS.URI_PERCEIVABLE_TEXTALT_BUTTONS} />
      <Route path={URIS.URI_PERCEIVABLE_TEXTALT_ASCII} />
    </Fragment>
  );
};
export default PerceivableRoutes;
