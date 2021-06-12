import React,{useState} from 'react'

function CustomButton(){
    let [count,setCount] = useState(0);
    const handleButtonClick = (e) => {
    setCount(count + 1);
    }
    return  (<>
        <button onClick={handleButtonClick}>Click me</button>
        <div>you clicked {count} times!</div>
    </>)
}
export default CustomButton;