import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import BannerHome from "./components/BannerHome/BannerHome"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category_id" element={<ItemListContainer />} />
          <Route path="/product/:product_id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <BannerHome/>
      </BrowserRouter>
    </>
  );
}

export default App;
