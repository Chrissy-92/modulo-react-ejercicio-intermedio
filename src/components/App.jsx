import "../styles/App.scss";
import Api from "./api.json";
import Header from "./Header";
import Form from "./Form";
import TableAdalabers from "./TableAdalabers";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(
    Api.results.map((item) => ({
      id: item.id,
      name: item.name,
      counselor: item.counselor,
      speciality: item.speciality,
    }))
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Header />
      <main>
        <Form />
        <TableAdalabers adalabers={data} />
      </main>
    </div>
  );
}

export default App;
