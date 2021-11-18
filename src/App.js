import React from "react";
import Header from "./components/Layouts/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
function App() {
  const [showCart, setshowCart] = React.useState(false);

  const showCartHandler = () => {
    setshowCart(true);
  };
  const hideCartHandler = () => {
    setshowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onHide={hideCartHandler} />}
      <Header onClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
