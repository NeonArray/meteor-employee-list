import React from "react";
import { createContainer } from "meteor/react-meteor-data";
import { Employees } from "../../imports/collections/employees";
import EmployeeDetail from "./EmployeeDetail";


const PER_PAGE = 20;

class EmployeeList extends React.Component {

  componentWillMount() {
    this.page = 1;
  }

  _handleClick() {
    Meteor.subscribe("employees", PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    return (
      <div>
        <div className="employee-list">
          {this.props.employees.map(employee => {
            return (
              <EmployeeDetail key={employee._id} employee={employee} />
            );
          })}
        </div>
        <button onClick={this._handleClick.bind(this)} className="btn btn-primary">Load More</button>
      </div>
    );
  }
}

export default createContainer(() => {
  // setup sub
  Meteor.subscribe("employees", PER_PAGE);
  // return object, whatever is returned will be sent to EmployeeList as props
  return {
    employees: Employees.find({}).fetch()
  }
}, EmployeeList);