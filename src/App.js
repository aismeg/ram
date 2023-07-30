import React from "react";
import '../src/App.css';
import { Main } from "./Components/Main/Main";
import { Sidebar } from "./Components/SIdebar/Sidebar";
import { useCharacter } from "./data/useCharacter";

function App() {
  console.log(useCharacter().data);
  return (
    <div className="parent">
      <Sidebar />
      <Main />
    </div>
  )
}


export default App;
