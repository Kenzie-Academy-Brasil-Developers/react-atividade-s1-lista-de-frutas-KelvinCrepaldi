import { useState } from "react";
import "./App.css";
import FruitBox from "./components/FruitBox";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const filterRedFruits = () => {
    setFruits(fruits.filter((fruit) => fruit.color === "red"));
  };

  const totalPrice = fruits.reduce((x, y) => x + y.price, 0);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h2>preço total: {totalPrice}</h2>
          <FruitBox list={fruits}></FruitBox>
          <button onClick={filterRedFruits}>Filtrar frutas vermelhas</button>
        </div>
      </header>
    </div>
  );
}

export default App;
