import React, {useRef, useState} from "react";
import {Form, Button} from "react-bootstrap";

function Registration() {
    const [user, setUser] = useState({});
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const ageInput = useRef(null);
    const submitForm = e => {
        e.preventDefault();
        let temp = {
            name: nameInput.current.value,
            email: emailInput.current.value,
            age: ageInput.current.value
        }
        setUser(temp);
    }
    return <Form onSubmit={submitForm}>
        <div>{JSON.stringify(user)}</div>
        <Form.Control type={'text'} placeholder={'Enter your name'}
                      name={'name'} ref={nameInput}/>
        <Form.Control type={'email'} placeholder={'Enter your email'}
                      className={'my-3'} name={'email'} ref={emailInput}/>
        <Form.Control type={'number'} placeholder={'Enter your age'}
                      className={'my-3'} name={'age'} ref={ageInput}/>
        <div className={'text-right'}>
            <Button className='mb-3' variant={'success'} type={'submit'}>Submit</Button>
        </div>
    </Form>
}

export default Registration;