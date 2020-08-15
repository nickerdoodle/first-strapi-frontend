import React, { useEffect, useState } from "react";
import { Pizza, PizzaType, PizzaSize } from "./models/pizza";
import PizzaList from "./components/PizzaList";
function App(): JSX.Element {
  const [pizzas, setPizzas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/pizzas")
      .then((data) => data.json())
      .then((data) => setPizzas(data));
  }, []);
  return (
    <div>
      <PizzaList pizzas={pizzas}></PizzaList>
    </div>
  );
}

export default App;
