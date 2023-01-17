import { useState } from "react";
import Cart from "./components/Cart/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setcartIsShown] = useState(false);

  const cartVisiblityHandler = () => {
    setcartIsShown(!cartIsShown);
  }

  return (
    <CartProvider>
      { cartIsShown && <Cart onCartToggle={cartVisiblityHandler} /> }
      <Header onCartToggle={cartVisiblityHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;