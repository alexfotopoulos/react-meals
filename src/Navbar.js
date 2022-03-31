import React from 'react'
import './Navbar.css'

export default function Navbar(props) {
  return (
    <nav className='Navbar'>
        <div>
            <p className='Navbar-title'>ReactMeals</p>
        </div>
        <div className='Navbar-cartInfo'>
            <i className="fa-solid fa-cart-shopping Navbar-cartInfo-content"></i>
            <span className='Navbar-cartInfo-content'>Your Cart</span>
            <div className='Navbar-cartInfo-content Navbar-itemTotals'>{props.items.length}</div>
        </div>
    </nav>
  )
}
