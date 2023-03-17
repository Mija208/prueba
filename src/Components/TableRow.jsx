import React from 'react';

const TableRow = ({user}) => {
const {name, species} = user
  return (
    <tr>
      <td>{name}</td>
      <td>{species}</td>
    </tr>

  );
};

export default TableRow;
