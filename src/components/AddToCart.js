import '../styles/addtocart.scss'
import { StateContext } from '../context/AppProvider'
import { useContext } from 'react'

const AddToCart = () => {

    let cartPackage = useContext(StateContext);
    
    let cartPackageAre =cartPackage.cartItems.map((item)=> {
        return (
            <div>
                <img src = {item.img} />
                <h6 className='img-head'> {item.title} </h6>
            </div>
        )
    })

    

    return (
        <div className="add-to-cart-wrapper">
            <h6 className='cart-head'>Your Cart</h6>
            {cartPackageAre}
        </div>



    )
}


export default AddToCart