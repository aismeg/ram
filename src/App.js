import React from "react";
import '../src/App.css';
import { Main } from "./Components/Main/Main";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Lastbar } from "./Components/Lastbar/Lastbar";
import { Context } from './Components/Functions/context';
import { usePagination } from "./Components/Hooks/usePagination";


function App() {
  const pagination = usePagination();

  return (
    <Context.Provider value={
      pagination
    }>
      <div className="parent">
        <Sidebar />
        <Main />
        <Lastbar />
      </div >
    </Context.Provider>
  )
}


export default App;
