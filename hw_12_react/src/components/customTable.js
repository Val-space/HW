import React from "react";
import TableItem from "./tableItem";
import Table from "react-bootstrap/Table";

function CustomTable({ somenames }) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {somenames.map((person) => (
            <TableItem
              key={person.id}
              name={person.name}
              email={person.email}
              age={person.age}
              id={person.id}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default CustomTable;
