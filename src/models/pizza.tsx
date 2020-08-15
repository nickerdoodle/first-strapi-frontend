export enum PizzaSize {
  "Small",
  "Medium",
  "Large",
}

export enum PizzaType {
  "Cheese",
  "Pepperoni",
  "Hawaiian",
  "Combo",
  "Vegan",
}

export interface Pizza {
  id: number;
  title: string;
  description: string;
  price: number;
  size: PizzaSize;
  type: PizzaType;
}

// [
//   {
//     id: 1,
//     title: "Summer Deal",
//     description: "Yummy pizza",
//     price: 7.99,
//     size: "Medium",
//     type: "Pepperoni",
//     created_by: { id: 1, firstname: "Nick", lastname: "Mahe", username: null },
//     updated_by: { id: 1, firstname: "Nick", lastname: "Mahe", username: null },
//     created_at: "2020-08-15T03:32:00.021Z",
//     updated_at: "2020-08-15T03:32:00.030Z",
//   },
// ];
