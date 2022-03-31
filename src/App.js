import React, { useState } from 'react'
import './App.css';
import Navbar from './Navbar';
import Summary from './Summary'
import Menu from './Menu';

function App() {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([])

  function handleItemSelection(item) {
    setItems(prevItem => ([...prevItem, ...item]))
  }

  function incrementTotal(price) {
    setTotal(prevTotal => (prevTotal + price))
  }

  return (
    <div className="App">
      <Navbar items={items}/>
      <Summary />
      <Menu handleItemSelection={handleItemSelection} incrementTotal={incrementTotal}/>
    </div>
  );
}

export default App;
