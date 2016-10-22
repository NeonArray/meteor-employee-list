import React from "react";


const EmployeeDetail = ({ employee }) => {
  const { name, email, phone, avatar } = employee;

  return (
    <div className="employee">
      <div className="employee--avatar">
        <img src={avatar} />
      </div>
      <h3 className="employee--name">{name}</h3>
      <div className="employee--meta">
        <p className="email">
          {email}
        </p>
        <p className="phone">
          {phone}
        </p>
      </div>
    </div>
  );
};

export default EmployeeDetail;