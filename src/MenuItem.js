import React from 'react';
import './MenuItem.css';

export default function MenuItem() {
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
                    <input type="number" />
                </div>
                <button>+Add</button>
            </div>
        </div>
    )
}
