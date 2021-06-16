import React from "react";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="lds-default mt-5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Loader;
