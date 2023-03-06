import React, { useContext } from "react";
import CartContext from "../../../../store/CartContext";

const ShirtForm = () => {
    const crtContxt = useContext(CartContext);

    const submitFormHandler = (event) => {
        event.preventDefault();

        const tobeAddProduct = {
            id: Math.random().toString(),
            name: document.getElementById("shirtName").value,
            description: document.getElementById("shirtDescr").value,
            price: document.getElementById("shirtPrice").value,
            quantityLarge: document.getElementById("shirtL").value,
            quantityMedium: document.getElementById("shirtM").value,
            quantitySmall: document.getElementById("shirtS").value,
        }
        crtContxt.addItem(tobeAddProduct);
    };

    return (
        <form onSubmit={submitFormHandler} style={{ display: "flex" }}>
            <div>
                <label>Tshirt name</label>
                <input id="shirtName" type="text"></input>
            </div>

            <div>
                <label>Description</label>
                <input id="shirtDescr" type="text"></input>
            </div>

            <div>
                <label>price</label>
                <input id="shirtPrice" type="number"></input>
            </div>

            <div>
                <label>Size L</label>
                <input id="shirtL" type="number"></input>
            </div>


            <div>
                <label>Size M</label>
                <input id="shirtM" type="number"></input>
            </div>

            <div>
                <label >Size S</label>
                <input id="shirtS" type="number"></input>
            </div>


            <button type="submit">Add Product</button>
        </form>
    )
};
export default ShirtForm;