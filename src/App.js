import React, { useCallback, useState } from "react";
import { Switch, withRouter } from "react-router-dom";
import TextInput from "./textinput/textinput";

function App() {
  const [state, setState] = useState({});

  const handleChangeInput = useCallback((value) => {
    setState((prev) => ({
      ...prev,
      ...value,
    }));
  }, []);
  return (
    <Switch>
      <>
        <div
          className="app"
          style={{
            padding: "80px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#fcfcfc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              required
              widthInput="250px"
              variant="second"
              color="secondary"
              maxLength="15"
              value={state}
              name="second"
              label="Name"
              placeholder="Type your name"
              onChange={handleChangeInput}
              onPressEnter={(value) => console.log(value)}
            />
          </div>
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#222",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              required
              widthInput="200px"
              variant="second"
              color="dark"
              value={state}
              name="kek1"
              label="Last Name"
              placeholder="Enter your Last Name"
              onChange={handleChangeInput}
              onPressEnter={(value) => console.log(value)}
            />
          </div>
          <div
            style={{
              width: "300px",
              height: "300px",
              backgroundColor: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextInput
              autoComplete="off"
              id="lalala"
              widthInput="300px"
              variant="third"
              color="primary"
              value={state}
              name="third"
              label="Films"
              placeholder="Type your favourite films!"
              onChange={handleChangeInput}
              onPressEnter={(value) => console.log(value)}
            />
          </div>
        </div>
      </>
    </Switch>
  );
}

export default withRouter(App);
