import React from "react";
import "./App.css";
import ButtonPalette from "./component/ButtonPalette";
import AlertPalette from "./component/AlertPalette";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex flex-row gap-10">
          <ButtonPalette />
          <AlertPalette />
        </div>
      </header>
    </div>
  );
}

export default App;
