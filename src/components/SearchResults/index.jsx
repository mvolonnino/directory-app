import React from "react";
import { MDBDataTableV5 } from "mdbreact";

const SearchResults = ({ employees }) => {
  console.log("(SearchResults) { employees } ", employees);
  const data = {
    columns: [
      {
        label: "IMAGE",
        field: "img",
        sort: "disabled",
        width: 150,
      },
      {
        label: "NAME",
        field: "name",
        width: 270,
      },
      {
        label: "START DATE [JOB]",
        field: "startDate",
        width: 150,
      },
      {
        label: "EMAIL",
        field: "email",
        width: 200,
      },
      {
        label: "DOB [AGE]",
        field: "dob",
        width: 250,
      },
      {
        label: "LOCATION",
        field: "location",
        width: 150,
      },
    ],
    rows: [
      ...employees.map((row) => {
        return {
          img: <img src={row.img} alt={`${row.name.first} ${row.name.last} thumbnail`} />,
          name: row.name.first + " " + row.name.last,
          email: row.email,
          dob: row.dob,
          location: row.location,
          startDate: row.startDate,
        };
      }),
    ],
  };

  return (
    <MDBDataTableV5
      hover
      searchTop
      searchBottom={false}
      entriesOptions={[10, 25, 50, 100]}
      entries={10}
      pagesAmount={4}
      fullPagination
      striped
      searchLabel={"Search Directory"}
      theadColor={"blue"}
      theadTextWhite
      responsive
      data={data}
    />
  );
};

export default SearchResults;
