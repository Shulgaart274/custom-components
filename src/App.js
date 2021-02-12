import React from "react";
import { Switch, withRouter } from "react-router-dom";
import Checkbox from "./checkbox/checkbox";

function App() {
  return (
    <Switch>
      <>
        <div className="app">
          <Checkbox size={25} label="dark" color="dark" />
          <Checkbox size={25} label="primary" color="primary" />
          <Checkbox size={25} label="secondary" color="secondary" />
        </div>
      </>
    </Switch>
  );
}

export default withRouter(App);
