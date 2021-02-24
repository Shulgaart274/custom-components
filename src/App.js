import React from "react";
import Checkbox from "./checkbox/checkbox";

function App() {
  return (
    <>
      <div className="app">
        <Checkbox size={25} label="dark" color="dark" />
        <Checkbox size={25} label="primary" color="primary" />
        <Checkbox size={25} label="secondary" color="secondary" />
      </div>
    </>
  );
}

export default App;
