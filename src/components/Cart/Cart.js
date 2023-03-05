import React, { useContext } from "react";
import Modal from "../UI/Button/Modal/Modal";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";

const Cart=(props)=>{
const crtContxt=useContext(CartContext);

const cartShirts=crtContxt.cartItems.map((item)=>(
    <CartItem 
    key={item.id}
    name={item.name}
    price={item.price}
    quantityMedium={item.quantityMedium}
    quantityLarge={item.quantityLarge}
    quantitySmall={item.quantitySmall}/>
))
return (
    <Modal onClose={props.onClose}>
        {cartShirts}
        <div>Total Amount</div>
        <div>{crtContxt.finalPrice}</div>
      <button onClick={props.onClose}>
                    Close
                </button>
                <button >Order</button>
    </Modal>
)
}
export default Cart;