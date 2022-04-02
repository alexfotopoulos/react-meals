import React, { useRef } from 'react';
import './MenuItem.css';

export default function MenuItem(props) {
    let numOfItems = useRef();

    function handleClick() {
        numOfItems = parseInt(numOfItems.current.value);
        props.handleItemSelection(props.title, numOfItems);
        props.incrementTotal((props.price * numOfItems));
    };
    return (
        <div className='MenuItem'>
            <div className='MenuItem-info'>
                <h3>{props.title}</h3>
                <p className='MenuItem-description'>{props.description}</p>
                <p className='MenuItem-price'><span>$</span>{(props.price/100).toFixed(2)}</p>
            </div>
            <div className='MenuItem-amountInfo'>
                <div className='MenuItem-amountInfo-input'>
                    <h3>Amount</h3>
                    <input ref={numOfItems} name='itemCount' type="number" min={1} max={5} defaultValue={1}/>
                </div>
                <button onClick={handleClick}>+Add</button>
            </div>
        </div>
    );
};
