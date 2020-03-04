import React, { Fragment } from 'react';
import MainNav from './components/nav/MainNav';
import { MainRoutes } from './routes';

import 'assets/sass/index.scss';


function App() {
  return (
    <Fragment>
      <div className="App">
        <div id="#virtual-cursor-top" tabIndex="-1" />
        <header className="col-12">React Accessibility Application</header>
        <MainNav />
        <MainRoutes />
      </div>
      <div>
        <span className="hidden" id="openNewWindow">
          Opens in a new Window
        </span>
      </div>
    </Fragment>
  );
}

export default App;
