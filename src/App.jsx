import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListsOverview from "./components/ListsOverview";
import { testData } from "./assets/testData";

function App() {
  return (
    <div className="App">
      <ListsOverview data={testData} />
    </div>
  );
}

export default App;
