import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Department = () => {
  const [employees, setEmployees] = useState([]);
  const [department, setDepartment] = useState('engineering');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees?department=${department}`)
      .then(res => setEmployees(res.data))
      .catch(err => console.error(err));
  }, [department]);

  return (
    <div className="container mt-4">
      <h2>Filter by Department</h2>
      <select 
        className="form-select mb-3" 
        value={department} 
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="engineering">Engineering</option>
        <option value="hr">HR</option>
        <option value="sales">Sales</option>
      </select>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.surname}</td>
              <td>{emp.gender}</td>
              <td>{emp.department}</td>
              <td>${emp.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Department;