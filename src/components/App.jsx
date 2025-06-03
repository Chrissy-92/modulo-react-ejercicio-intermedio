import "../styles/App.scss";
import data from "../data/adalabers.json";
import Header from "./Header";
import Form from "./Form";
import TableAdalabers from "./TableAdalabers";
import { useState } from "react";

function App() {
  const [adalabers] = useState(data.results);

  return (
    <div>
      <Header />
      <main>
        <Form />
        <TableAdalabers adalabers={adalabers} />
      </main>
    </div>
  );
}

export default App;
