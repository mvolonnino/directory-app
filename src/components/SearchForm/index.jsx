import React from "react";

function SearchForm(props) {
  console.log("(SearchForm) props: ", props);

  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="empoloyee">Employee Search</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Search an employee name"
          id="employee"
        />
        <datalist id="employees">
          {props.employees.map((employee, index) => (
            <option value={employee} key={index} />
          ))}
        </datalist>
      </div>
    </form>
  );
}

export default SearchForm;
