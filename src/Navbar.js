import React, { useState } from 'react';
import ShoppingCartModal from './ShoppingCartModal';
import './Navbar.css';


export default function Navbar(props) {
  const [modal, setModal] = useState(false);

  function activateModal() {
    setModal(true);
  };

  function clearModal() {
    setModal(false);
  };

  function getTotalAmount() {
    let total = 0;
    for (let item of props.selectedItems) {
      total += item.amount;
    };
    return total;
  };

  return (
    <div>
      {modal && <ShoppingCartModal
        clearModal={clearModal}
        selectedItems={props.selectedItems}
        total={props.total}
        incrementTotal={props.incrementTotal}
        decrementTotal={props.decrementTotal}
        handleItemSelection={props.handleItemSelection}
        handleItemDeletion={props.handleItemDeletion}
      />}
      <nav className='Navbar'>
        <div>
          <p className='Navbar-title'>ReactMeals</p>
        </div>
        <div onClick={activateModal} className='Navbar-cartInfo'>
          <i className="fa-solid fa-cart-shopping Navbar-cartInfo-content"></i>
          <span className='Navbar-cartInfo-content'>Your Cart</span>
          <div className='Navbar-cartInfo-content Navbar-itemTotals'>{props.selectedItems ? getTotalAmount() : 0}</div>
        </div>
      </nav>
    </div>
  );
};
