import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import "../../styles/shopping-cart.css"

const StickyFooter = () => {
    const cartProducts = useSelector((state) => state.cart.cartItems);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    
  return (
    <>
    {cartProducts.length !== 0 ? (
        <div className="cart__bottom d-flex align-items-center justify-content-between">
          <h6>
            Subtotal : <span>₹{totalAmount}</span>
          </h6>
          <button>
            <Link to="/cart">
              Continue
            </Link>
          </button>
        </div>
    ):(<div></div>)}
    </>
  )
}

export default StickyFooter