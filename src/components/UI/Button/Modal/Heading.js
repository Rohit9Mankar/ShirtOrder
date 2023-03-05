import React, { useContext } from "react";
import CartContext from "../../../../store/CartContext";

const Heading=(props)=>{
    const crtContxt=useContext(CartContext);
    const quantOfCart=crtContxt.totalAmount;
    return(
        <div>
        <h2>Buy Shirt Online</h2>
        <button onClick={props.onClick}>Cart{quantOfCart}</button>
    </div>
    )
   
}

export default Heading;