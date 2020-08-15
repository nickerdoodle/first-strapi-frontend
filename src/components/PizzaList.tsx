import React, { Component, JSXElementConstructor } from "react";
import { Pizza, PizzaType, PizzaSize } from "../models/pizza";
export default function PizzaList({
  pizzas,
}: {
  pizzas: Pizza[];
}): JSX.Element {
  const pizzaList = pizzas.map((pizza: Pizza) => (
    <div key={pizza.id}>
      {pizza.size} {pizza.type}
    </div>
  ));

  return <div>{pizzaList}</div>;
}
