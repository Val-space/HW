import React, { useState, useEffect } from "react";
import getNames from "./getNamesApi";
import TableItem from "./tableItem";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
function CustomTable() {
  const [names, setNames] = useState([
    { id: 1, name: "Adria", email: "Adria@gmail.com", age: 20 },
    { id: 2, name: "Nigel", email: "Nigel@gmail.com", age: 18 },
    { id: 3, name: "Samael", email: "Samael@gmail.com", age: 21 },
    { id: 4, name: "Roark", email: "Roark@gmail.com", age: 33 },
    { id: 5, name: "Salma", email: "Salma@gmail.com", age: 31 },
  ]);
  useEffect(() => {
    getNames().then((data) => setNames(data));
  }, []);
  const [filteredNames, setFilteredNames] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const searchPeople = (e) => {
    let value = e.target.value;
    setSearchValue(value);
    let temp = names.filter(
      (name) => name.name.toLocaleLowerCase().indexOf(value) > -1
    );
    setFilteredNames(temp);
  };
  const changeAdultName = (id, newName) => {
    let updatedPeopleArr = names.map(item => (item.id === id ? {...item, name: newName} : {...item}));
    setNames(updatedPeopleArr);
  }

  return (
    <>
      <Form.Control
        type="text"
        placeholder="Enter your search here"
        onChange={searchPeople}
      />
      <Table striped bordered hover className="mt-4">
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
          {filteredNames.length && searchValue ? (
            filteredNames.map((person) => (
              <TableItem key={person.id} person={person} />
            ))
          ) : !filteredNames.length && searchValue ? (
            <tr>
              <td colSpan={5}>Not found</td>
            </tr>
          ) : (
            names.map((person) => <TableItem key={person.id} person={person} changeAdultName={changeAdultName} />)
          )}
        </tbody>
      </Table>
    </>
  );
}

export default CustomTable;
