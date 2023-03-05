import React, { useContext } from "react";
import CartContext from "../../../../store/CartContext";
import ShirtItem from './ShirtItem'

const Tshirts=()=>{
   const crtContxt=useContext(CartContext);

const addProductHandler=(item)=>{
crtContxt.addItem(item);
}

const menuOfTshirts=crtContxt.menuItems.map((item)=>(
    <ShirtItem 
    key={item.id}
    name={item.name}
    description={item.description}
    price={item.price}
    quantityLarge={item.quantityLarge}
    quantityMedium={item.quantityMedium}
    quantitySmall={item.quantitySmall}
    onAdd={addProductHandler.bind(null,item)}/>
));

return(
    <React.Fragment>
        {menuOfTshirts}
    </React.Fragment>

)
}

export default Tshirts;