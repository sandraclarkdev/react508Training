import React from 'react';
import { Switch, Route } from 'react-router-dom';

import URIS from 'libraries/constants/uri-constants';

import { PerceivableRoutes } from 'routes/';

import HomePage from 'pages/home/HomePage';
import PerceivableSubNav from 'pages/perceivable/SubNav';

const MainRoutes = () => (
  <div id="main-content">
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      {/* Perceivable */}
      <Route path={URIS.URI_PERCEIVABLE}>
        <div className="row">
          <div className="col-md-3">
            <PerceivableSubNav />
          </div>
          <div className="col-md-9">
            <PerceivableRoutes />
          </div>
        </div>
      </Route>

      <Route path={URIS.URI_PERCEIVABLE_TIMEBASE}></Route>
      <Route path={URIS.URI_PERCEIVABLE_ADAPTABLE}></Route>
      <Route path={URIS.URI_PERCEIVABLE_DISTINGUISHABLE}></Route>
      {/* Operable */}
      <Route path={URIS.URI_OPERABLE}></Route>
      <Route path={URIS.URI_OPERABLE_KEYBOARD}></Route>
      <Route path={URIS.URI_OPERABLE_TIME}></Route>
      <Route path={URIS.URI_OPERABLE_SEIZURE}></Route>
      <Route path={URIS.URI_OPERABLE_NAVIGABLE}></Route>
      {/* Understandable */}
      <Route path={URIS.URI_UNDERSTANDABLE}></Route>
      <Route path={URIS.URI_UNDERSTANDABLE_READABLE}></Route>
      <Route path={URIS.URI_UNDERSTANDABLE_PREDICTABLE}></Route>
      <Route path={URIS.URI_UNDERSTANDABLE_INPUT}></Route>
      {/* Robust */}
      <Route path={URIS.URI_ROBUST}></Route>
      <Route path={URIS.URI_ROBUST_COMPATIBLE}></Route>
    </Switch>
  </div>
);

export default MainRoutes;
