import React, { useState } from 'react';
import Meals from '../meals/Meals';
import './meal.css'


const Meal = ({meal , handelselectedfood , hendelfooding  }) => {


    
const [selected,setselectes] = useState(false)

const handelSelected =() =>{
   setselectes(selected ? false : true) 
    handelselectedfood(meal)
}





    return (
        <div className={`meal ${selected && 'mealSelected'}`}>
            <img className='mealImage' src={meal.strMealThumb} alt={meal.strMeal} />
              <p>Food name : {meal.strMeal}</p>
             <p> Catagori : {meal.strCategory}</p>
           <h2>Region of Food :{meal.strCountry}</h2>
           <button onClick={handelSelected}> { selected ? 'selected' : 'Not selected' } </button>
           <button onClick= {()=> hendelfooding(meal.strMealThumb)}>Add food picture</button>
               
        </div>
    );
};

export default Meal;