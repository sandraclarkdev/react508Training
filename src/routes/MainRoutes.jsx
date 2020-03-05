import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Content } from 'carbon-components-react';

import URIS from 'libraries/constants/uri-constants';

import { PerceivableRoutes } from 'routes/';

import HomePage from 'pages/home/HomePage';
import PerceivableSubNav from 'pages/perceivable/SubNav';

const MainRoutes = () => (
  <div id="main-top">
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      {/* Perceivable */}
      <Route path={URIS.URI_PERCEIVABLE}>
        <div className="bx--row" id="main-content">
          <div className="bx--col-lg-3">
            <PerceivableSubNav />
          </div>
          <div className="bx--col-lg-9">
            <Content>
              <PerceivableRoutes />
            </Content>
          </div>
        </div>
      </Route>
      {/* Operable */}
      <Route path={URIS.URI_OPERABLE} />
      {/* Understandable */}
      <Route path={URIS.URI_UNDERSTANDABLE} />
      {/* Robust */}
      <Route path={URIS.URI_ROBUST} />
    </Switch>
  </div>
);

export default MainRoutes;
