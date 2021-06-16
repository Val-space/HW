import React from "react";
import Button from "react-bootstrap/Button";

function ShowNamesButton({ name, email }) {
  const handleButtonClick = () => {
    console.log(`name: ${name},email:${email}`);
  };

  return (
    <Button variant="info" onClick={handleButtonClick}>
      Show in console
    </Button>
  );
}

export default ShowNamesButton;
