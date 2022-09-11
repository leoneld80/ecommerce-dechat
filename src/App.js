import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
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

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
