import React, { useState } from 'react';
import EmployeeRow from './EmployeeRow';
import './EmployeeTable.css';

function EmployeeTable() {
  // Исходные данные сотрудников
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Иван Петров', position: 'Разработчик', salary: 70000 },
    { id: 2, name: 'Мария Сидорова', position: 'Дизайнер', salary: 60000 },
    { id: 3, name: 'Алексей Смирнов', position: 'Менеджер', salary: 85000 },
    { id: 4, name: 'Ольга Кузнецова', position: 'Аналитик', salary: 75000 },
  ]);

  const [sortColumn, setSortColumn] = useState(null); // Колонка для сортировки
  const [sortDirection, setSortDirection] = useState('asc'); // Направление сортировки 'asc' или 'desc'

  // Функция для удаления сотрудника
  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  // Функция для сортировки
  const handleSort = (column) => {
    if (sortColumn === column) {
      // Если кликнули на ту же колонку, меняем направление
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // Если кликнули на новую колонку, сортируем по возрастанию
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  // Отсортированный список сотрудников (вычисляемое значение)
  const sortedEmployees = [...employees].sort((a, b) => {
    if (!sortColumn) return 0; // Если нет колонки для сортировки, не сортируем

    const aValue = typeof a[sortColumn] === 'string' ? a[sortColumn].toLowerCase() : a[sortColumn];
    const bValue = typeof b[sortColumn] === 'string' ? b[sortColumn].toLowerCase() : b[sortColumn];

    if (aValue < bValue) {
      return sortDirection === 'asc' ? -1 : 1;
    }
    if (aValue > bValue) {
      return sortDirection === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <table className="employee-table">
      <thead>
        <tr>
          <th onClick={() => handleSort('name')}>
            Имя {sortColumn === 'name' && (sortDirection === 'asc' ? '▲' : '▼')}
          </th>
          <th onClick={() => handleSort('position')}>
            Должность {sortColumn === 'position' && (sortDirection === 'asc' ? '▲' : '▼')}
          </th>
          <th onClick={() => handleSort('salary')}>
            Зарплата {sortColumn === 'salary' && (sortDirection === 'asc' ? '▲' : '▼')}
          </th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {sortedEmployees.map(employee => (
          <EmployeeRow key={employee.id} employee={employee} onDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;