function Form() {
  return (
    <form className="filters">
      <label htmlFor="filterName">Nombre:</label>
      <input type="text" name="filterName" id="filterName" />
      <label htmlFor="chooseTutor">Elije una Tutora:</label>
      <select
        className="input-select"
        name="chooseTutor"
        id="chooseTutor"
        value={""}
        // onChange={handleTutor}
      >
        <option value="">Escoge una opción</option>
        <option value="yanelis">Yanelis</option>
        <option value="dayana">Dayana</option>
        <option value="ivan">Iván</option>
        <option value="miguel">Miguel</option>
      </select>
    </form>
  );
}

export default Form;
