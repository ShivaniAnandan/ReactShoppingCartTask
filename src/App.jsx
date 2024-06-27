import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
// Importing Bootstrap JS and its dependencies
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log(cart);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
    console.log(cart);
  };


  return (
    <>
      {/* <h1>App Component</h1> */}
      <Navbar cartCount={cart.length}/>
      <Header/>
      <ProductList cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}/>
      <Footer/>
    </>
  )
}

export default App
