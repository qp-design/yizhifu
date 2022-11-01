import React from "react";
import ReactDOM from "react-dom";

import MonitorComponent from './view';

const App = () => (
  <>
    <MonitorComponent />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
