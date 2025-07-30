import React from 'react';

function EmployeeRow({ employee, onDelete }) {
  return (
    <tr>
      <td>{employee.name}</td>
      <td>{employee.position}</td>
      <td>{employee.salary}</td>
      <td>
        <button onClick={() => onDelete(employee.id)}>Удалить</button>
      </td>
    </tr>
  );
}

export default EmployeeRow;