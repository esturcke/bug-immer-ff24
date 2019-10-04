import React from "react";
import "./App.css";
import produce from "immer";

function App() {
  const foo = produce({}, draft => {
    draft.name = "Immer";
  });
  return (
    <div className="App">
      <h1>Hello {foo.name}</h1>
    </div>
  );
}

export default App;
