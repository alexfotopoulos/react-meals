import React from 'react';
import './ShoppingCartModal.css';
import ModalListItem from './ModalListItem';
import foodItemList from './foodItemList';

export default function ShoppingCartModal(props) {

    function getPrice(title) {
        for (let i = 0; i < foodItemList.length; i++) {
            if (foodItemList[i].title === title) {
                return foodItemList[i].price
            }
        }
    };

    let ModalListItemElements = [];
    for (const item of props.selectedItems) {
        ModalListItemElements.push(
            <ModalListItem
                title={item.title}
                price={getPrice(item.title)}
                count={item.amount}
                incrementTotal={props.incrementTotal}
                decrementTotal={props.decrementTotal}
                handleItemSelection={props.handleItemSelection}
                handleItemDeletion={props.handleItemDeletion}
                key={Math.random()}
            />
        )
    }

    function handleClick() {
        props.clearModal();
    }

    return (
        <div>
            <div onClick={handleClick} className='ShoppingCartModal-backdrop' />
            <div className='ShoppingCartModal'>
                <div className='ShoppingCartModal-content'>
                    {ModalListItemElements}
                    <div className='ShoppingCartModal-totalSection'>
                        <div className='ShoppingCartModal-totalSection-amount'>
                            <h2>Total Amount</h2>
                            <h2>${(props.total/100).toFixed(2)}</h2>
                        </div>
                        <div className='ShoppingCartModal-totalSection-buttons'>
                            <button onClick={handleClick}>close</button>
                            <button>Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

