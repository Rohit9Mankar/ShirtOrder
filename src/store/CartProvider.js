import React, { useState } from "react";
import CartContext from "./CartContext";


const CartProvider = (props) => {
    const [tshirtArray, setTshirtArray] = useState([]);
    const [cartItemArray, setCartItemArray] = useState([]);
    const [totalQuant,setTotalQuantity]=useState(0);
    const [finalPrice,setFinalPrice]=useState(0);

    const addItemHandler = (item) => {

        setTshirtArray((prev) => {

            return [...prev, item]
        });

        setFinalPrice((prev)=>{
            return prev+(3*item.price);
        });

const inTheCart={...item,quantityLarge:0,quantityMedium:0,quantitySmall:0}

        setCartItemArray((prev)=>{
            return [...prev,inTheCart]
        })

    };

const addToCartHandler=(id,size)=>{

const remIndex=cartItemArray.findIndex((ele)=> ele.id===id);
const remIndexItem=cartItemArray[remIndex];
const mIndexItem=tshirtArray[remIndex];

if(size==="large"){
    setCartItemArray((prev)=>{
        prev[remIndex]={...remIndexItem,
                   quantityLarge: remIndexItem.quantityLarge+1,
                }
                return [...prev];
    });
    setTshirtArray((prev)=>{
        prev[remIndex]={...mIndexItem,
            quantityLarge: mIndexItem.quantityLarge-1,
         }
         return [...prev];
    });
    setTotalQuantity(totalQuant+1);
}

if(size==="small"){
    setCartItemArray((prev)=>{
        prev[remIndex]={...remIndexItem,
                   quantitySmall: remIndexItem.quantitySmall+1,
                }
                return [...prev];
    });
    setTshirtArray((prev)=>{
        prev[remIndex]={...mIndexItem,
            quantitySmall: mIndexItem.quantitySmall-1,
         }
         return [...prev];
    });
    setTotalQuantity(totalQuant+1);
}

if(size==="medium"){
    setCartItemArray((prev)=>{
        prev[remIndex]={...remIndexItem,
                   quantityMedium: remIndexItem.quantityMedium+1,
                }
                return [...prev];
    });
    setTshirtArray((prev)=>{
        prev[remIndex]={...mIndexItem,
            quantityMedium: mIndexItem.quantityMedium-1,
         }
         return [...prev];
    });
    setTotalQuantity(totalQuant+1);
}

}

  
    const cartContext = {
        menuItems : tshirtArray,
        cartItems : cartItemArray,
        totalAmount : totalQuant,
        finalPrice :  finalPrice,
        addItem : addItemHandler,
        addToCart : addToCartHandler
        
    }
    
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
};



export default CartProvider;