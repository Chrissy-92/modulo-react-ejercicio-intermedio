import TableRow from "./TableRow";

function TableAdalabers({ adalabers }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tutora</th>
          <th>Especialidad</th>
        </tr>
      </thead>
      <tbody>
        {adalabers.map((adalaberObj) => (
          <TableRow key={adalaberObj.id} adalaberObj={adalaberObj} />
        ))}
      </tbody>
    </table>
  );
}

export default TableAdalabers;
