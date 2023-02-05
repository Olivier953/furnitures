import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products"
import About from "./pages/About"
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";
import MainContext from "./pages/MainContext";

function App() {  

useEffect(() => {
const shopping = localStorage.getItem("shoppingCart");
if(!shopping) {
  localStorage.setItem('shoppingCart', JSON.stringify([]));
}
}, [])

  return (
    <>
    <BrowserRouter>
    <MainContext>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/favorites" element={<Favorites/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/product/:name" element={<ProductDetail/>}/>
    </Routes>
    </MainContext>
    </BrowserRouter>
    </>
  );
}

export default App;
