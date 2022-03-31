import React from 'react'
import './Menu.css'
import MenuItem from './MenuItem'

export default function Menu(props) {
    return (
        <div className='Menu'>
            <MenuItem handleItemSelection={props.handleItemSelection} incrementTotal={props.incrementTotal}/>
        </div>
    )
}
