import { useContext } from "react";
import { StateContext } from "../context/AppProvider";
import '../styles/checkout.scss'


const Checkout = () => {
    const cartPackage = useContext(StateContext)

    let cartPackageAre =cartPackage.cartItems.map((item)=> {
        return (
            <div>
                <img src = {item.img} />
                <h4> {item.title} </h4>
            </div>
        )
    })

    
    return (
        <div className="checkout" id="checkout-section">
            <h2>Shopping Cart</h2>
            <div className="checkout-content">
            {cartPackageAre}
            </div>
        </div>
    );
};


export default Checkout;