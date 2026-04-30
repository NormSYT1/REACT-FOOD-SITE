import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import About from "./pages/About";
import Cart from "./components/Cart";
import { foods } from "./data/foods";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");
  const [message, setMessage] = useState(""); // 🔥 YENİ

  const addToCart = (food) => {
    setCart(prev => [...prev, food]);
  };

  // 🔥 Türkçe arama
  const normalize = (text) =>
    text.toLocaleLowerCase("tr-TR");

  const filteredFoods = foods.filter(food =>
    normalize(food.name).includes(normalize(search))
  );

  // 💰 toplam fiyat
  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  // 🛒 sipariş işlemi (alert YOK)
  const placeOrder = () => {
    if (cart.length === 0) {
      setMessage("⚠️ Sepet boş");
      return;
    }

    setMessage("✅ Siparişiniz oluşturuldu");
    setCart([]);

    // ⏱ otomatik mesaj silme
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <div>
      <Header setPage={setPage} />

      {/* 🔔 MESAJ */}
      {message && (
        <div className="alert-box">
          {message}
        </div>
      )}

      {/* SAYFA */}
      {page === "home" && (
        <>
          <Hero />
          <Search search={search} setSearch={setSearch} />
          <FoodList items={filteredFoods} addToCart={addToCart} />

          <Cart 
            cart={cart} 
            totalPrice={totalPrice} 
            placeOrder={placeOrder} 
          />
        </>
      )}

      {page === "about" && <About />}
    </div>
  );
}