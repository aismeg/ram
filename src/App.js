import React from "react";
import '../src/App.css';
import { Main } from "./Components/Main/Main";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Lastbar } from "./Components/Lastbar/Lastbar";
import { useDataSet } from "./Components/Hooks/useDataSet";
import { Loading } from "./Components/Loading/Loading";

function App() {
  const data = useDataSet();

  return (
    <div className="parent">
      <Sidebar />
      {data.characters ?
        <>
          <Main data={data} />
          <Lastbar {...data} />
        </>
        :
        <Loading />
      }
    </div >
  )
}


export default App;
