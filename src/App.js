import React from "react";
import '../src/App.css';
import { Pagebar } from "./Components/Pagebar/Pagebar";
import { Modal } from "./Components/Modal/Modal";
import { Card } from "./Components/Card/Card";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { Lastbar } from "./Components/Lastbar/Lastbar";
import { Closing } from "./Components/Lastbar/Closing";
import { Loading } from "./Components/Loading/Loading";
import { useDataSet } from "./Components/Hooks/useDataSet";
import { useContent } from "./Components/Hooks/useContent";
import { Mobile } from "./Components/Sidebar/Mobile";

function App() {
  const data = useDataSet();
  const openItem = useContent();

  return (
    <div className="parent">
      <Mobile data={data} />
      <Sidebar {...data} />
      {data.pages ?
        <>
          <main className="container content-container">
            <Card {...data} {...openItem} />
            {openItem.openItem && <Modal {...openItem} {...data} />}
            <Pagebar {...data} />
          </main>
          <aside className="buttons">
            {openItem.openItem ?
              <Closing {...openItem} />
              :
              <Lastbar {...data} />}
          </aside>
        </>
        :
        <Loading />
      }
    </div>
  )
}


export default App;
