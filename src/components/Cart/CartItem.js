import React from "react";

const CartItem=(props)=>{
return (
    <div>
        <div>{props.name}</div>
        <div>L {props.quantityLarge} M{props.quantityMedium} S{props.quantitySmall}</div>
        <div>{props.price}</div>
    </div>
)
}
export default CartItem;