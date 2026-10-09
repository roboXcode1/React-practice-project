import React from 'react';
import Meals from '../meals/Meals';
import './meal.css'

const Meal = ({meal}) => {
    return (
        <div className='meal'>
            <img className='mealImage' src={meal.strMealThumb} alt={meal.strMeal} />
              <p>Food name : {meal.strMeal}</p>
             <p> Catagori : {meal.strCategory}</p>
           <h2>Region of Food :{meal.strCountry}</h2>
           <button>Selected </button>
               
        </div>
    );
};

export default Meal;