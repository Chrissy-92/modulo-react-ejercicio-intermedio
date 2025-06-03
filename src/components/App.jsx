import "../styles/App.scss";
import data from "../data/adalabers.json";
import Header from "./Header";
import TableAdalabers from "./TableAdalabers";
import { useState } from "react";

function App() {
  const [adalabers] = useState(data.results);
  const [nameFilter, setNameFilter] = useState("");
  const [counselorFilter, setCounselorFilter] = useState("");

  const handleInputName = (ev) => {
    setNameFilter(ev.target.value);
  };
  const handleInputCounselor = (ev) => {
    setCounselorFilter(ev.target.value);
  };

  const filteredAdalabers = adalabers
    .filter((eachAdalaber) =>
      eachAdalaber.name
        .toLocaleLowerCase()
        .includes(nameFilter.trim().toLocaleLowerCase())
    )
    .filter((eachAdalaber) => eachAdalaber.counselor.includes(counselorFilter));

  return (
    <div>
      <Header />
      <main>
        <form>
          <label htmlFor="nameFilter">Filtrar por nombre:</label>
          <input
            onInput={handleInputName}
            type="text"
            name="nameFilter"
            id="nameFilter"
            placeholder="Ej: Nerea"
          />
          <label htmlFor="counselorFilter">Elije una Tutora</label>
          <select
            onInput={handleInputCounselor}
            name="counsolerFilter"
            id="counselorFilter"
          >
            <option selected disabled>
              -- Selecciona tu profesora --
            </option>
            <option value="Dayana">Profesora Dayana</option>
            <option value="Iván">Profesor Iván</option>
          </select>
        </form>
        <TableAdalabers adalabers={filteredAdalabers} />
      </main>
    </div>
  );
}

export default App;
