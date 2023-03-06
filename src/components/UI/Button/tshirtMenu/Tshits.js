import React, { useContext } from "react";
import CartContext from "../../../../store/CartContext";
import ShirtItem from './ShirtItem'

const Tshirts = () => {
    const crtContxt = useContext(CartContext);



    const largeHandler = (id,size) => {

        
        crtContxt.addToCart(id,size);
    }
    const mediumHandler = (id,size) => {
        crtContxt.addToCart(id,size);
    }
    const smallHandler = (id,size) => {
        crtContxt.addToCart(id,size);
    }


    const menuOfTshirts = crtContxt.menuItems.map((item) => (
        <ShirtItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            quantityLarge={item.quantityLarge}
            quantityMedium={item.quantityMedium}
            quantitySmall={item.quantitySmall}
            onLargeRemove={largeHandler.bind(null, item.id,"large")}
            onSmallRemove={smallHandler.bind(null, item.id,"small")}
            onMediumRemove={mediumHandler.bind(null, item.id,"medium")}/>
    
));

    return (
        <React.Fragment>
            {menuOfTshirts}
        </React.Fragment>

    )
}

export default Tshirts;