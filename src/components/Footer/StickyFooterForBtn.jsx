import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/shopping-cart.css"

const StickyFooterForBtn = (props) => {
    
  return (
    <>
        <div className="cart__bottom d-flex align-items-center justify-content-between" >
          <button style={{width:"100%", padding:"10px 0"}}>
            <Link to={props.url}>
              {props.title}
            </Link>
          </button>
        </div>
    </>
  )
}

export default StickyFooterForBtn