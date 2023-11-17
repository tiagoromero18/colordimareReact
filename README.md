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
