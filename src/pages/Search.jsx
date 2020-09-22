import React, { Component } from "react";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

import "./style.css";

class Search extends Component {
  state = {
    employees: [],
    results: [],
  };

  componentDidMount() {
    API.getEmployees()
      .then((res) => {
        console.log("res.data.results: ", res.data.results);
        let employee = res.data.results.map((employee) => {
          return {
            img: employee.picture.thumbnail,
            name: employee.name,
            email: employee.email,
            startDate: employee.registered.date.split("T")[0] + " [" + employee.registered.age + "yrs]",
            location: employee.location.country,
            dob: employee.dob.date.split("T")[0] + " [" + employee.dob.age + "yrs]",
          };
        });
        console.log("employee: ", employee);
        this.setState({
          results: res.data.results,
          employees: employee,
        });
      })
      .catch(console.error);
  }

  // handleInputChange = (event) => {
  //   this.setState({ search: event.target.value });
  // };

  render() {
    console.log("state: ", this.state);

    return (
      <div className="container-fluid">
        <div className="row bdr">
          <div className="col">
            <h1 className="mt-4 display-4 text-center text-white">Employee Directory</h1>
          </div>
        </div>
        <hr className="my-4"></hr>
        <div className="row">
          <div className="col">
            <p className="lead text-center">
              This directory utilizes the randomgenerator api which will call each time the page is loaded. You can then
              search through the 'employees' that were called to see if you can match any data in the table.
              <em> Happy searching!</em>
            </p>
            <p className="text-center text-muted">
              You can also sort the table by ascending and descending order by clicking the column headers ~ i.e. clicking on
              "Name" will sort alphabetically, "Age" by how old, "Location" alphabetically by the country and so on. You can
              also change the number of rows per page from 10, 25, 50, or 100.
            </p>
            <SearchResults employees={this.state.employees} />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
