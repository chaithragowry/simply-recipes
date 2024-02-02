import { useContext, useState } from 'react';
import '../styles/specialdishes.scss';
import CardDishes from './CardDishes';
import Popup from './Popup';
import AddToCart from './AddToCart';


import { AllMenuContext } from './AllMenuContext';

function SpecialDishes(props) {

    let [showPopUp, setShowPopUp] = useState(false);
    let [currentDish, setCurrentDish] = useState('');
    const [showAddToCart, setShowAddToCart] = useState(false);

    const allMenus = useContext(AllMenuContext)

    //let's show the popup
    function showPopupHandler(dishName) {
        setShowPopUp(true);
        setCurrentDish(dishName);
        setShowAddToCart(true);
    }

    //let's close the popup
    function closePopupHandler() {
        setShowPopUp(false);
    }

    

    let maxSpecialDishes = 5;
    let specialMenus = allMenus.map((menuItem, index) => {
        if (index <= maxSpecialDishes) {
            return (
                <CardDishes
                    menuItem={menuItem}
                    showPopup={showPopupHandler} />
            )
        }
    })
    return (
        <section className="special-dishes" id="specialdishes-section" >

            {showPopUp && <Popup
                closePopup={closePopupHandler}
                currentDish={currentDish}
                showAddToCart={showAddToCart}
            />} { /*circuit method to display popup*/}

            <div className="container">

            {showAddToCart && <AddToCart />}

                <div className="special-dishes-content text-center">
                    <h2>Our Special Dishes</h2>
                    <p>Indulge your taste buds with our curated selection of special dishes, each crafted to perfection and designed to elevate your culinary experience.Explore a diverse range of recipes.Whether you're a seasoned chef or a novice in the kitchen, our special dishes offer a unique blend of inspiration and innovation, inviting you to savor the extraordinary in every bite. Unleash your inner chef and embark on a culinary adventure with our collection of exceptional recipes, exclusively available on our app.</p>
                </div>

                <div className="special-dishes-list">
                    <ul className='flex flex-wrap flex-center gap-20'>
                        {specialMenus}
                    </ul>
                </div>
            </div>
        </section>

    )
}
export default SpecialDishes;