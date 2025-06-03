function TableRow({ adalaberObj }) {
  return (
    <tr>
      <td>{adalaberObj.name}</td>
      <td>{adalaberObj.counselor} </td>
      <td>{adalaberObj.speciality} </td>
    </tr>
  );
}

export default TableRow;
