import React from 'react';
import { Switch, Route } from 'react-router-dom';

const NonTextPageRoutes = ({}) => (
  <Switch>
    <Route path="/1_1_1/ShortText">
      <ShortText />
    </Route>
    {/* <Route path="/1_1_1/graphics">

    </Route> */}
    <Route path="/1_1_1/LongText">
      <LongText />
    </Route>
    <Route path="/1_1_1/Controls">
      <Controls />
    </Route>
    <Route path="/1_1_1/Ignored">
      <Ignored />
    </Route>
    <Route path="/1_1_1/CSS">
      <CSS />
    </Route>
    <Route path="/1_1_1/Aria">
      <Aria />
    </Route>
  </Switch>
);

export default NonTextPageRoutes;
function ShortText() {
  return <h2>Short Text</h2>;
}
function LongText() {
  return <h2>Long Text</h2>;
}
function Controls() {
  return <h2>Controls</h2>;
}
function Ignored() {
  return <h2>Ignored</h2>;
}
function CSS() {
  return <h2>CSS Techniques</h2>;
}
function Aria() {
  return <h2>Aria Techniques</h2>;
}
