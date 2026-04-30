import FoodCard from "./FoodCard";

export default function FoodList({ items = [], addToCart }) {
  return (
    <div className="menu-items">
      {items.map(food => (
        <FoodCard key={food.id} food={food} addToCart={addToCart} />
      ))}
    </div>
  );
}