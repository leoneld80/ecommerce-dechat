import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
