import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Cart from './pages/Cart/Cart';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}/>
          <Route path="/cart" exact element={<Cart />}/>
          <Route path="/contact" exact element={<Contact />}/>
          <Route path="/product/:id" exact element={<Product />}/>
          <Route path="/singleproduct/:id" exact element={<SingleProduct />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
