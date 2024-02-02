
import { useContext } from 'react'
import '../styles/popup.scss'
import { AllMenuContext } from './AllMenuContext'
import { DispatchContext } from '../context/AppProvider';


function Popup({ closePopup, currentDish }) {

  const allMenus = useContext(AllMenuContext);
  const dispatch = useContext(DispatchContext);

  let dishDetails = allMenus.filter((menuItem) => {
    return menuItem.strMeal == currentDish
  }).map((item) => {
    return (
      <div className='popup-content-data'>
        <div className='popup-header'>
        <img src={item.strMealThumb} alt=''/>
        <h5 className='popup-header-category'>{item.strCategory}</h5>
        </div>

        <h2>{item.strMeal}</h2>

        <div className='popup-paragraph-container'>
      <p className='popup-paragraph'>{item.strInstructions}</p>
    </div>

        <ul className='dish-ingredients flex'>
          <li>{item.strIngredient1}</li>
          <li>{item.strIngredient2}</li>
          <li>{item.strIngredient3}</li>
          <li>{item.strIngredient4}</li>
          </ul>

          <button onClick={() => {
            dispatch({
              type: "add_to_cart",
              payload:{
                title:item.strMeal,
                img:item.strMealThumb,
              },
            });
          } }
          >
            Order Now</button>
        <h5 className='popup-close' onClick={closePopup}>Close</h5>
      </div>
    )
  })

  return (
    <div className="popup">
      <div className="popup-content">
        {dishDetails}
        
      </div>

    </div>
  )
}
export default Popup