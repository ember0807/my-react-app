import React, { useState } from 'react';
import './DataTable.css';
const DataTable = ({ data, columns }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc'); // 'asc' или 'desc'

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = React.useMemo(() => { // Use useMemo for performance
      if (!sortColumn) return data;

      return [...data].sort((a, b) => {
          const valueA = a[sortColumn];
          const valueB = b[sortColumn];

          if (valueA < valueB) return sortDirection === 'asc' ? -1 : 1;
          if (valueA > valueB) return sortDirection === 'asc' ? 1 : -1;
          return 0;
      });
  }, [data, sortColumn, sortDirection]);


  return (
    <table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column} onClick={() => handleSort(column)}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map(item => (
          <tr key={item.id}>
            {columns.map(column => (
              <td key={`${item.id}-${column}`}>{item[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;