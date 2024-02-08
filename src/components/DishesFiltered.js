import { useState,useEffect, useContext} from 'react';
import '../styles/dishesfiltered.scss';
import Pagination from './Pagination';
import CardDishes from './CardDishes';
import { AllMenuContext } from './AllMenuContext';
import Popup from './Popup';
import AddToCart from './AddToCart';

function DishesFiltered(props) {
  
    let [menuCategory, setMenuCategory] = useState([]);
    let [singleDish, setSingleDish] = useState([]);
    let [filteredDishes, SetFilteredDishes] =  useState([]);
    let [activeDish, setActiveDish] =  useState("Beef");
    let [currentPage, setCurrentPage] = useState(1);
    let [itemsPerPage, setItemsPerPage] = useState(4);
    let allMenus = useContext(AllMenuContext)

    let [showPopUp, setShowPopUp] = useState(false);
    let [currentDish, setCurrentDish] = useState('');
    const [showAddToCart, setShowAddToCart] = useState(false);


  //Get all the categories
    async function getAllCategories() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
        let response = await fetch(API_URL);
        let categoryData = await response.json();
        setMenuCategory(categoryData.categories);

    }

    //Get only one dish as default
    async function getOnlyOneDish() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
        let response = await fetch(API_URL);
        let singleDishData = await response.json();
        setSingleDish(singleDishData.meals);

    }


    useEffect(() => {
        getAllCategories();
        getOnlyOneDish();
    }, [])
  


  //calculation for pagination
  let indexOfLastDish = currentPage * itemsPerPage ;

  let indexOfFirstDish = indexOfLastDish - itemsPerPage ;
  
  let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)


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




  //lets show only single dish
  let maxItem = 8;
  let singleDishItems =singleDish.map((item,index) => {
    if(index < maxItem) {
    return (
      <li>
          <img src= {item.strMealThumb} />
          <h4>{item.strMeal}</h4>
        </li>
    )
    }
  })
  

  //show dishes on click
  function showFilterDishesHandler(category){

    setSingleDish([]) //to empty the singleDish array
    setActiveDish(category)
     
    let filteredDishesAre = allMenus.filter((item) => {
      return item.strCategory === category
    }).map((menuItem) => {
      return (
        <CardDishes 
        menuItem = {menuItem}
        showPopup={showPopupHandler} 
        showAddToCart={showAddToCart} />
      )
    })
    SetFilteredDishes(filteredDishesAre)
   
  }

//lets show all the categories
  let allCategories = menuCategory.map((item) => {
    return (
      <li className = {`btn ${item.strCategory == activeDish ? "active" : "" }`} onClick ={() => {showFilterDishesHandler(item.strCategory)}} > {item.strCategory} </li>
    )
  })


  return (

    <div className="filtered-dishes" id="dishesfiltered-section"> 
    {showPopUp && <Popup
                closePopup={closePopupHandler}
                currentDish={currentDish}
            />} { /*circuit method to display popup*/}

      <div className="fill text-center">
      {showAddToCart &&<AddToCart />}
      
      <h2 className='head'>Choose your dishes</h2>
        <p className='description'>Indulge your cravings by selecting from a diverse array of mouthwatering dishes. Whether you're in the mood for a sea food, a pasta, or a savory stir-fry, our curated selection has something to satisfy every palate. Choose your desired culinary adventure.</p>
      </div>

      <div className='dishes-filtered'>
        <ul>
          {allCategories}
        </ul>
      </div>

      <div className='filtered-dishes-results' >
        <ul className='flex flex-wrap gap-5' >
           { singleDishItems }
           {filteredDishes.length != 0 || singleDishItems.length != 0  ? showTheseDishesNow : 
           <div className='alert'>
            <h3>Sorry, No items found.</h3>
            <h4>Please try another dishes</h4>
            </div>}
        </ul>
        <Pagination 
         filteredDishes = {filteredDishes}
         itemsPerPage = {itemsPerPage} 
         setCurrentPage = {setCurrentPage} />
      </div>

    </div>
  )
}
export default DishesFiltered