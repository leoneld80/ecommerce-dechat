import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext/CartContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:category_id"
            element={<ItemListContainer />}
          />
          <Route
            path="/product/:product_id"
            element={<ItemDetailContainer />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
