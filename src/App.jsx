import React from 'react';
import MainNav from './components/nav/MainNav';
import { MainRoutes } from './routes';

function App() {
  return (
    <div className="App">
      <header className="col-12">React Accessibility Application</header>
      <div id="#top">
        <MainNav />
        <MainRoutes />
      </div>
      <div>
        <span className="hidden" id="openNewWindow">
          Opens in a new Window
        </span>
      </div>
    </div>
  );
}

export default App;
