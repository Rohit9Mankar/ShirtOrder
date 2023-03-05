import React, { useState } from "react";
import CartContext from "./CartContext";

const dummymenu = [
    {
        id: "01",
        name: "HRX Tshits",
        description: "Lifestyle Bio wash Tshirt",
        price: 699,
        quantitySmall: 2,
        quantityLarge: 100,
        quantityMedium: 20
    },
    {
        id: "02",
        name: "Urbano Fashion",
        description: "Slim tropical printed pure cotton",
        price: 509,
        quantitySmall: 10,
        quantityLarge: 10,
        quantityMedium: 28
    },
    {
        id: "03",
        name: "Beverly Hills Polo Club",
        description: "Polo Collar Tshirt",
        price: 1200,
        quantitySmall: 5,
        quantityLarge: 17,
        quantityMedium: 20
    },
    {
        id: "04",
        name: "Tommy Hilfiger",
        description: "Striped Polo Cotton Shirt",
        price: 1999,
        quantitySmall: 30,
        quantityLarge: 90,
        quantityMedium: 45,
    }
];
const CartProvider = (props) => {
    const [tshirtArray, setTshirtArray] = useState(dummymenu);
    const [cartItemArray, setCartItemArray] = useState([]);
    const [totalQuant,setTotalQuantity]=useState(0);
    const [finalPrice,setFinalPrice]=useState(0);

    const addItemHandler = (item) => {

        const indexItem = {
            ...item,
            quantityLarge:  1,
            quantityMedium:  1,
            quantitySmall: 1
        }
        setCartItemArray((prev) => {

            return [...prev, indexItem]
        });

        setTotalQuantity((prev)=>{
            return prev+3
        })
        setFinalPrice((prev)=>{
            return prev+(3*item.price);
        })

        const remIndex=tshirtArray.findIndex((ele)=>ele.id===item.id);
        const remIndexItem=tshirtArray[remIndex];
        setTshirtArray((prev)=>{
            prev[remIndex]={...remIndexItem,
                quantityLarge: remIndexItem.quantityLarge- 1,
                quantityMedium: remIndexItem.quantityMedium- 1,
                quantitySmall: remIndexItem.quantitySmall- 1
            }
            return [...prev]
        })
    };

  
    const cartContext = {
        menuItems: tshirtArray,
        cartItems: cartItemArray,
        totalAmount: totalQuant,
        finalPrice:finalPrice,
        addItem: addItemHandler,
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};



export default CartProvider;