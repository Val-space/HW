import React from 'react';
import {Button} from "react-bootstrap";

function CartItem({el,removeFromCart}) {
    return <div><div>{el.catalogItem.title}</div><div><Button variant={'light'} className={'mt-2'} onClick={() => removeFromCart(el.id)}>remove item</Button></div>
    <hr/></div>
}

export default CartItem; 