import React,{useRef} from "react";
import Button from 'react-bootstrap/Button';
// import ShowNamesButton from "./showNamesButton";

function TableItem({ person,changeAdultName}) {
  const changeNameInput = useRef(null)
  return (
    <>
      <tr>
        <td>{person.id}</td>
        <td>{person.name}</td>
        <td>{person.email}</td>
        <td>{person.age}</td>
        <td>
        <input type={'text'} placeholder={'change name'} ref={changeNameInput}/>
        <Button className={'ml-4'}
                    onClick={() => changeAdultName(person.id, changeNameInput.current.value)}
                    variant="dark">Set New Name</Button>
          {/* <ShowNamesButton name={person.name} email={person.email} /> */}
        </td>
      </tr>
    </>
  );
}
export default TableItem;
