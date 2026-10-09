import React, { use, useState } from 'react';
import Meal from '../meal/Meal';
import './meals.css'


const Meals = ({mealPromies }) => {



    const [selectesfoodimg,setselectesfoodimg] =useState([])
    const hendelfooding =(image)=>{
        const newselectimg = [...selectesfoodimg,image]
        setselectesfoodimg(newselectimg)
    }
 


    const [selectedFood,setselectedFood] = useState([])
      const handelselectedfood =  (meal) => {
        
            const newselected = [...selectedFood,meal]
            setselectedFood(newselected)
            //    console.log('click selected food ' , selectedFood) 

      }


    const mealsData = use(mealPromies)
       const totalMeals = mealsData.meals ;
    //    console.log(totalMeals)
    return (
        <div>
               <h2>All the country : {totalMeals.length}</h2>
               <h2>All selected food : {selectedFood.length}</h2>
 

                <div>
                     { <ol>
                    {
                        selectedFood.map(meals=>
                             <li> key={meals.strCategory}  {meals.strMeal}</li>)
                    }
                 </ol> }
                </div>

                <div className='selectimage'>
                    {
                            selectesfoodimg.map(fooding => <img key ={fooding.strMeal} src={fooding}></img>)
                    }
                </div>
                       

                 <div>
                {
                    totalMeals.map(meal => <Meal key  ={meal.strMealThumb}  
                        
                         meal = {meal}
                             handelselectedfood  ={handelselectedfood}
                               hendelfooding ={hendelfooding}
                          ></Meal>)
                }
               </div>
        </div>
    );
};

export default Meals;