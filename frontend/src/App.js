import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import Products from "./pages/Products.js";
import Discovery from "./pages/Discovery.js";
import Blogs from "./pages/Blogs.js";




function App() {

    return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products" element={<Products />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/discovery" element={<Discovery />}/>



      </Routes>
    </BrowserRouter>
      
    );
  }
  
export default App;