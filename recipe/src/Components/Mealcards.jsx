import React from 'react'
import { NavLink } from 'react-router-dom';

const Mealcards = ({detail}) => {
    console.log(detail);
    
  return (
    <div className='meals'>
        {!detail ? "" : detail.map((curItem) => {
    return (
        <div className='mealImg' key={curItem.idMeal}> 
            <img src={curItem.strMealThumb} alt={curItem.strMeal} />
            <p>{curItem.strMeal}</p>
            <NavLink to={`/${curItem.idMeal}`}> <button>Recipe</button></NavLink>
        
        </div>
        
        );

})




}
      
  

      
    </div>
  )
}



export default Mealcards
