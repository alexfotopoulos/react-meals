import React, { useRef } from 'react';
import './MenuItem.css';

export default function MenuItem(props) {
    let numOfItems = useRef();

    function handleClick() {
        numOfItems = numOfItems.current.value;
        let itemArray = [];
        for (let i = 0; i < numOfItems; i++) {
            itemArray.push(props.title)
        }
        props.handleItemSelection(itemArray);
        props.incrementTotal((props.price * itemArray.length))
        console.log(numOfItems.current)
    }
    return (
        <div className='MenuItem'>
            <div className='MenuItem-info'>
                <h3>{props.title}</h3>
                <p className='MenuItem-description'>{props.description}</p>
                <p className='MenuItem-price'><span>$</span>{props.price}</p>
            </div>
            <div className='MenuItem-amountInfo'>
                <div className='MenuItem-amountInfo-input'>
                    <h3>Amount</h3>
                    <input ref={numOfItems} name='itemCount' type="number" min={0}/>
                </div>
                <button onClick={handleClick}>+Add</button>
            </div>
        </div>
    )
}
