export default function Cart({ cart, totalPrice, placeOrder }) {
  return (
    <div className="cart">
      <h2>Sepet</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Sepet boş</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div className="cart-item" key={i}>
              <span>{item.name}</span>
              <span className="cart-item-price">{item.price} TL</span>
            </div>
          ))}

          <div className="cart-total">
            Toplam: <strong>{totalPrice} TL</strong>
          </div>

          <button className="order-btn" onClick={placeOrder}>
            Sipariş Ver
          </button>
        </>
      )}
    </div>
  );
}