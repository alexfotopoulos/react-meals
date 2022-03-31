import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Summary from './Summary';
import Menu from './Menu';

function App() {
  const [total, setTotal] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);

  function handleItemSelection(item, num) {
    let updatedItems = [...selectedItems];
    let counter = 0;
    updatedItems.forEach(i => {
      if (i.title === item) {
        i.amount += num;
        counter++;
      };
    });
    if (counter === 0) {
      updatedItems.push({title:item, amount:num});
    };
    setSelectedItems(updatedItems);
  };

  function handleItemDeletion(item) {
    let updatedItems = [...selectedItems];
    updatedItems.forEach(i => {
      if (i.title === item) {
        i.amount -= 1;
      };
    });
    for (let i = 0; i < updatedItems.length; i++) {
      if (updatedItems[i].amount === 0) {
        updatedItems.splice(i, 1)
      };
    };
    setSelectedItems(updatedItems);
  };

  function incrementTotal(price) {
    setTotal(prevTotal => (prevTotal + price));
  };

  function decrementTotal(price) {
    setTotal(prevTotal => (prevTotal - price));
  };

  return (
    <div className="App">
      <img id='backgroundImage' src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true" alt="" />
      <Navbar selectedItems={selectedItems} total={total} incrementTotal={incrementTotal} decrementTotal={decrementTotal} handleItemSelection={handleItemSelection} handleItemDeletion={handleItemDeletion} />
      <Summary />
      <Menu handleItemSelection={handleItemSelection} incrementTotal={incrementTotal} />
    </div>
  );
};

export default App;
