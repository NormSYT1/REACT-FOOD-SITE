export default function FoodCard({ food, addToCart }) {
  return (
    <div className="menu-item">
      <img src={food.img} alt={food.name} />

      <div className="food-content">
        <h3>{food.name}</h3>
        <p>{food.desc}</p>
      </div>

      <div className="food-footer">
        <span>{food.price} TL</span>

        <button onClick={() => addToCart(food)}>
          Sepete Ekle
        </button>
      </div>
    </div>
  );
}