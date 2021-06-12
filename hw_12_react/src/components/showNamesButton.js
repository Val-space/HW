import React from 'react';
import Button from 'react-bootstrap/Button';

function ShowNamesButton({name,email}){
    const handleButtonClick = () => {
        console.log(name,email)
        }

    return  <Button variant="info" onClick={handleButtonClick}>Click me</Button>
}

export default ShowNamesButton;