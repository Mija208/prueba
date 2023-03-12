import React from 'react';

const TableRow = ({user}) => {
const {name, phone} = user
  return (
    <tr>
      <td>{name}</td>
      <td>{phone}</td>
    </tr>

  );
};

export default TableRow;
