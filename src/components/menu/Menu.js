import React, { useState, useEffect } from 'react';
import './Menu.css';
import MenuItem from './MenuItem';
import axios from 'axios';

export default function Menu(props) {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://react-meals-c2f5b-default-rtdb.firebaseio.com/meals.json');
            let mealData = [];
            for (let meal in response.data) {
                mealData.push({
                    id: meal,
                    title: response.data[meal].title,
                    price: response.data[meal].price,
                    description: response.data[meal].description,
                });
            };
            setMeals(mealData);
        }
        getData();
    }, [])

    return (
        <div className='Menu'>
            {meals.map(item => (
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
