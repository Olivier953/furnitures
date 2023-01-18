import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products"
import About from "./pages/About"
import EachProducts from "./pages/EachProducts"

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route index element={<Home/>}/>
    <Route path="/Home" component={<Home/>}/>
    <Route path="/Products" component={<Products/>}/>
    <Route path="/Products" component={<About/>}/>
    <Route path="/Product" component={<EachProducts/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
