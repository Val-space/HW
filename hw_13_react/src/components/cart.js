import React from 'react';
import './css/cart.css'
import CartItem from './cartItem';

function Cart({cart,removeFromCart}){
return <div className={'cart bg-primary text-white p-3'}>

     {cart.map(el => <CartItem key={el.id} el={el} removeFromCart={removeFromCart}/>)}

</div>

}

export default Cart; 