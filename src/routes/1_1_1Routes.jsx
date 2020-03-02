import React from 'react';
import { Switch, Route } from 'react-router-dom';

import URIS from 'libraries/constants/uri-constants';
import PerceivableSubNav from 'pages/perceivable/SubNav';

const Routes111 = () => (
  <div id="main-content">
    <div className="row">
      <div className="col-md-3">
        <PerceivableSubNav />
      </div>
      <div className="col-md-9">
        <Switch>
          <Route path={URIS.URI_PERCEIVABLE_TEXTALT_ALT}></Route>
          <Route path={URIS.URI_PERCEIVABLE_TEXTALT_GROUPING}></Route>
          <Route path={URIS.URI_PERCEIVABLE_TEXTALT_BUTTONS}></Route>
          <Route path={URIS.URI_PERCEIVABLE_TEXTALT_ASCII}></Route>
        </Switch>
      </div>
    </div>
  </div>
);
export default Routes111;
