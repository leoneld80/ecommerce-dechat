import React, { useContext } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext/CartContext';
import "./CartWidget.css";

function CartWidget() {
  const { cartQuantity, cart} = useContext(CartContext)

  return (
    
    <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-visible' :''}`}>

    <div className="cartWidget">
        <BsFillCartFill/>
        <span className='cartNumber'>{cartQuantity()}</span>
    </div>
    </Link>
  )
}

export default CartWidget