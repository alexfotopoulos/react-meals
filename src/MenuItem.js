import React, { useRef } from 'react';
import './MenuItem.css';

export default function MenuItem(props) {
    let numOfItems = useRef();

    function handleClick() {
        numOfItems = numOfItems.current.value;
        let itemArray = [];
        for (let i = 0; i < numOfItems; i++) {
            itemArray.push('Sushi')
        }
        props.handleItemSelection(itemArray);
        props.incrementTotal((22.99 * itemArray.length))
        console.log(numOfItems.current)
    }
    return (
        <div className='MenuItem'>
            <div className='MenuItem-info'>
                <h3>Sushi</h3>
                <p className='MenuItem-description'>Finest fish and veggies</p>
                <p className='MenuItem-price'><span>$</span>22.99</p>
            </div>
            <div className='MenuItem-amountInfo'>
                <div className='MenuItem-amountInfo-input'>
                    <h3>Amount</h3>
                    <input ref={numOfItems} name='itemCount' type="number"/>
                </div>
                <button onClick={handleClick}>+Add</button>
            </div>
        </div>
    )
}
