// import './App.css';

import { useState } from "react";

function App() {
  const arr = ["item1", "item2", "item3", "item4", "item5"];
  const [basket, setBasket] = useState([]);

  const addingItemsAfterClicking = (item) => {
    if (basket.includes(item)) {
      setBasket(basket.filter((basket_item) => basket_item !== item));
    } else {
      setBasket([...basket, item]);
    }
  };

  return (
    <>
      <div className="App">
        {arr.map((item) => {
          return (
            <ul key={item}>
              <li onClick={() => addingItemsAfterClicking(item)}>{item}</li>
            </ul>
          );
        })}
      </div>
      <div>
        <h2>Basket</h2>
        {basket.map((item) => (
          <ul key={item}>
            <li>{item}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
