import React from "react";
import Button from "react-bootstrap/Button";
// import {Link} from 'react-router-dom';

function ContactUs() {
  return (
    <>
      <div className="container  mt-5 ">
        <h2 className="my-5">NIKE HEADQUARTERS</h2>
        <p>
          Nike World Headquarters One Bowerman Drive Beaverton, OR 97005 Phone:
          1-503-671-6453 7:30 a.m. - 5:30 p.m. PT, Monday - Friday (except
          holidays).
        </p>
        <p>
          Nike European Headquarters Colosseum 1 1213 NL Hilversum The
          Netherlands Phone: +31 35 6266453
        </p>
        <p>
          Nike Greater China Headquarters No. 99, Jiangwancheng Road Yangpu
          District Shanghai 200438 Phone: +86-21-52882828
        </p>
        <Button variant="info">Go back </Button>
      </div>
    </>
  );
}
export default ContactUs;
