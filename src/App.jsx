import React, { Fragment } from 'react';
import { MainRoutes } from './routes';

import 'assets/sass/index.scss';
import AppHeader from 'components/Header';

function App() {
  return (
    <Fragment>
      <div className="App">
        <div id="#virtual-cursor-top" tabIndex="-1" />
        <AppHeader />
        <MainRoutes />
      </div>
      <div>
        <span className="sr-only" id="openNewWindow">
          Opens in a new Window
        </span>
      </div>
    </Fragment>
  );
}

export default App;
