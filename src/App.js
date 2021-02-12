import React from "react";
import { Switch, withRouter } from "react-router-dom";
import Button from "./button/button";

function App() {
  return (
    <Switch>
      <>
        <div className="app">
          <Button size="sm">Button</Button>

          <Button variant="secondary" size="lg">
            Secondary
          </Button>
          <Button variant="dark">Dark</Button>
          <Button variant="disabled" disabled>
            Disabled
          </Button>
        </div>
      </>
    </Switch>
  );
}

export default withRouter(App);
