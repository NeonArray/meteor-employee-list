import React from "react";


const EmployeeDetail = ({ employee }) => {
  const { name, email, phone, avatar } = employee;

  return (
    <div className="thumbnail">
      <img src={avatar} />
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>{email}
          </li>
          <li className="list-group-item">
            <span className="glyphicon glyphicon-phone" aria-hidden="true"></span>{phone}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetail;