import React, { use } from 'react';
import Meal from '../meal/Meal';

const Meals = ({mealPromies }) => {



    const mealsData = use(mealPromies)
       const totalMeals = mealsData.meals ;
    //    console.log(totalMeals)
    return (
        <div>
               <h2>All the country : {totalMeals.length}</h2>

               <div>
                {
                    totalMeals.map(meal => <Meal key  ={meal.idMeal} meal = {meal}></Meal>)
                }
               </div>
        </div>
    );
};

export default Meals;