
function CardDishes(props) {

     return (   
        
            <li href="javaScript:;" onClick={() => props.showPopup(props.menuItem.strMeal)}>
                
                <img src={props.menuItem.strMealThumb} className='br' alt="" />
                <h4>{props.menuItem.strMeal}</h4>
                
            </li>
        
    )
}
export default CardDishes