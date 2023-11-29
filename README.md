# colordimareReact
Final project 


---------------------------- AGREGAR LINK TO RENDER ---------------------------------

```
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from './pages/pagePath'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="page" element={<Page />} /> 
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
```
Por ahora mi appjs se ve asi

```
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home.js'
import Shop from './pages/shoppingcart.js'
import Admin from './pages/admin.js'
import Products from './pages/products.js'
import About from './pages/about.js'
import ProductInd from './pages/productInd.js';
import AddNewPro from './pages/addNewPro.js';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="home" element={<Home />} />
        <Route path="shoppingcart" element={<Shop />} />
        <Route path="admin" element={<Admin />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="productInd" element={<ProductInd/>} />
        <Route path="addNewPro" element={<AddNewPro/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
