import React from 'react'
import ShowNamesButton from './showNamesButton';


function TableItem({name,email,age,id}){
    return <>
    <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{age}</td>
        <td><ShowNamesButton name={name} email={email}/></td>
     </tr>
    </>
}
export default TableItem;