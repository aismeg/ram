import React from "react";
import '../src/App.css';
import { Main } from "./Components/Main/Main";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Lastbar } from "./Components/Lastbar/Lastbar";
import { usePagination } from "./Components/Hooks/usePagination";

function App() {
  const pagination = usePagination();

  return (
    <div className="parent">
      <Sidebar />
      {<Main {...pagination} />}
      {<Lastbar {...pagination} />}
    </div >
  )
}


export default App;
