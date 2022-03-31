import React from 'react';
import './ModalListItem.css';

export default function ModalListItem(props) {

    function handleIncrement() {
        props.handleItemSelection(props.title, 1);
        props.incrementTotal(props.price);
    };

    function handleDecrement() {
        props.handleItemDeletion(props.title);
        props.decrementTotal(props.price)
    };

    return (
        <div className='ModalListItem'>
            <div className='ModalListItem-info'>
                <h3>{props.title}</h3>
                <div className='ModalListItem-info-priceAndNum'>
                    <p className='ModalListItem-price'>${(props.price/100).toFixed(2)}</p>
                    <div>x{props.count}</div>
                </div>
            </div>
            <div className='ModalListItem-buttons'>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
};
