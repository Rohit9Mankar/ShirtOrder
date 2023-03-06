import React from "react";

const CartItem=(props)=>{
    const priced=props.price*(props.quantityLarge+props.quantityMedium+props.quantityMedium)
return (
    <div>
        <div>{props.name}</div>
        <div>L {props.quantityLarge} M{props.quantityMedium} S{props.quantityMedium}</div>
        <div>{priced}</div>
    </div>
)
}
export default CartItem;