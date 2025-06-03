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
        {adalabers.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.counselor}</td>
            <td>{item.speciality}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableAdalabers;
