import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import foodItemList from './foodItemList';

export default function Menu(props) {
    return (
        <div className='Menu'>
            {foodItemList.map(item => (
                <MenuItem
                handleItemSelection={props.handleItemSelection}
                incrementTotal={props.incrementTotal}
                title={item.title}
                description={item.description}
                price={item.price}
                key={item.id}
                />
            ))}
        </div>
    );
};
