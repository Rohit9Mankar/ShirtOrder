import React,{useState} from 'react';
import CartProvider from './store/CartProvider';
import './App.css';
import Tshirts from './components/UI/Button/tshirtMenu/Tshits';
import Heading from './components/UI/Button/Modal/Heading';
import Cart from './components/Cart/Cart';
import ShirtForm from './components/UI/Button/tshirtMenu/ShirtForm';

function App() {
const [showCart,setShowCart]=useState(false);

const cartOpenHandler=(event)=>{
  event.preventDefault();
  setShowCart(true);
}

const closeHandler=(event)=>{
  event.preventDefault();
  setShowCart(false);
}

  return (
   <CartProvider>
    
    <Heading onClick={cartOpenHandler}></Heading>
    <ShirtForm/>
    {showCart && <Cart onClose={closeHandler}/>}
    
    <Tshirts></Tshirts>
   </CartProvider>
  );
}

export default App;
